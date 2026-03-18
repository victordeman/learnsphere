/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  const { data: profile } = await (supabase
    .from('profiles') as any)
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') {
    redirect('/')
  }

  return (
    <div className="container max-w-7xl py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage courses, users, and platform settings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Course Management</CardTitle>
            <CardDescription>
              Create and edit courses, modules, and tasks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Manage Courses</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Analytics</CardTitle>
            <CardDescription>
              View learner progress and platform engagement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">View Analytics</Button>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">System Status</CardTitle>
            <CardDescription>
              Platform status: <span className="text-green-600 font-medium">Operational</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All AI engines are currently responding within expected latency.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border border-dashed p-12 text-center">
        <h3 className="text-lg font-medium">Full Dashboard Coming Soon</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This is a placeholder for the full Phase 8 admin implementation.
        </p>
      </div>
    </div>
  )
}
