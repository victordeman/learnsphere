import { TaskInterface } from '../../components/TaskInterface';

export default function LearningPage({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  // In a real app, fetch task data from Supabase
  const mockTask = {
    id: 'task-1',
    type: 'quiz',
    content: {
      question: 'What is the primary benefit of using a multi-model AI router?',
      options: [
        'Reduced latency',
        'Cost optimization',
        'Better accuracy for specific tasks',
        'All of the above',
      ],
      correctAnswer: 3,
    },
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Course Progress</h2>
        <nav className="space-y-2">
          <div className="text-sm font-medium">Module 1: Introduction</div>
          <div className="text-sm text-blue-600 font-bold">1.1 AI Routers</div>
          <div className="text-sm text-muted-foreground">1.2 Zod Schemas</div>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Learning: {params.courseId}</h1>
          <p className="text-muted-foreground">Module: {params.moduleId}</p>
        </header>

        <TaskInterface task={mockTask as any} />
      </main>
    </div>
  );
}
