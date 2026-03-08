'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PerformanceDashboard } from '@/components/PerformanceDashboard';
import { SkillRadar } from '@/components/SkillRadar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeToggle } from '@/components/ThemeToggle';

const mockPerformance = [
  { date: '2024-01', score: 65 },
  { date: '2024-02', score: 72 },
  { date: '2024-03', score: 85 },
];

const mockSkills = [
  { skill: 'TypeScript', value: 80 },
  { skill: 'React', value: 90 },
  { skill: 'AI/ML', value: 65 },
  { skill: 'Databases', value: 75 },
  { skill: 'System Design', value: 70 },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Learner Profile</h1>
          <p className="text-muted-foreground">Manage your preferences and track your progress.</p>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred AI Model</label>
              <Select defaultValue="mistral">
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mistral">Mistral-7B (Default)</SelectItem>
                  <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  <SelectItem value="claude-3">Claude 3.5 Sonnet</SelectItem>
                  <SelectItem value="gemini-1.5">Gemini 1.5 Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <SkillRadar data={mockSkills} />
          <PerformanceDashboard data={mockPerformance} />
        </div>
      </div>
    </div>
  );
}
