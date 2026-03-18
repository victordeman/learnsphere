/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AVAILABLE_MODELS } from '@/lib/ai/model-router'
import { updateProfile } from '@/app/auth/actions'

export default async function ProfilePage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  const { data: profile } = await (supabase
    .from('profiles') as any)
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: submissions } = await (supabase
    .from('submissions') as any)
    .select(`
      id,
      score,
      created_at,
      tasks (
        type,
        modules (
          title
        )
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false }) as { data: any[] | null }

  return (
    <div className="container max-w-4xl py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learner Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and view your learning progress.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details and how you want to be called.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={updateProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user.email}
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    Email cannot be changed.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    defaultValue={profile?.full_name || ''}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div>
                    <Label className="text-base">AI Model Preference</Label>
                    <CardDescription>
                      Select the AI engine that will power your personalized learning experience.
                    </CardDescription>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {AVAILABLE_MODELS.map((model) => (
                      <div key={model.id} className="relative">
                        <input
                          type="radio"
                          id={model.id}
                          name="preferredModel"
                          value={model.id}
                          className="peer sr-only"
                          defaultChecked={profile?.preferred_model === model.id}
                        />
                        <Label
                          htmlFor={model.id}
                          className="flex flex-col h-full items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([alpha])]:bg-primary/5 peer-checked:border-primary cursor-pointer transition-all"
                        >
                          <div className="space-y-1">
                            <span className="font-semibold">{model.name}</span>
                            <span className="text-xs text-muted-foreground block leading-tight">
                              {model.description}
                            </span>
                          </div>
                          <Badge variant="outline" className="mt-2 text-[10px] uppercase">
                            {model.provider}
                          </Badge>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning History</CardTitle>
              <CardDescription>
                Your recent activity and performance across all courses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submissions && submissions.length > 0 ? (
                <div className="space-y-6">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {(submission.tasks as any)?.modules?.title || 'Untitled Module'}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="capitalize text-[10px]">
                            {(submission.tasks as any)?.type || 'Task'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(submission.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">
                          {submission.score !== null ? `${submission.score}%` : '—'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-sm text-muted-foreground">No submissions yet.</p>
                  <Button variant="link" size="sm" className="mt-2">
                    Start learning
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stats Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tasks Completed</span>
                <span className="font-semibold">{submissions?.length || 0}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Avg. Score</span>
                <span className="font-semibold">
                  {submissions && submissions.length > 0
                    ? Math.round(
                        submissions.reduce((acc, curr) => acc + (curr.score || 0), 0) /
                          submissions.length
                      )
                    : 0}
                  %
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Member Since</span>
                <span className="font-semibold">
                  {profile?.created_at ? new Date(profile.created_at).getFullYear() : '—'}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Need Help?</CardTitle>
              <CardDescription>
                Access documentation or contact support for assistance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-background">
                View Support Docs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
