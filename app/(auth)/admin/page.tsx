'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage courses, tasks, and system analytics.</p>
      </header>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Course Management</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">1,234</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">42</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Tokens Used</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">2.5M</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate New Course Content</CardTitle>
              <CardDescription>Use AI to bulk generate modules and tasks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Bulk Generate Tasks</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
