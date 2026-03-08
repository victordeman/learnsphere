'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

const mockCourses = [
  {
    id: 'ai-engineering',
    title: 'AI Engineering Fundamentals',
    description: 'Learn how to build adaptive AI systems that leverage multiple models for optimal performance.',
    modules: 4,
  },
  {
    id: 'nextjs-advanced',
    title: 'Advanced Next.js Architecture',
    description: 'Master the App Router, Middleware, and advanced patterns in Next.js 15.',
    modules: 6,
  },
  {
    id: 'fullstack-supabase',
    title: 'Fullstack Development with Supabase',
    description: 'Build scalable applications with real-time databases and edge functions.',
    modules: 5,
  },
];

export default function LearnDashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="flex justify-between items-center border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold">Learning Center</h1>
          <p className="text-muted-foreground">Select a course to continue your adaptive learning journey.</p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="/profile">My Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <Card key={course.id} className="flex flex-col hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription>{course.modules} Interactive Modules</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-6 flex-1">{course.description}</p>
              <Button asChild className="w-full">
                <Link href={`/learn/${course.id}/intro`}>Start Learning</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
