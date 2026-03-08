import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">Learnsphere</h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/profile">Dashboard</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 text-center bg-muted/30">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
            Adaptive Learning Powered by AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Experience a personalized academic journey tailored to your skills.
            Leverage multi-model AI to master complex topics.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/learn">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">Read Documentation</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-3">Personalized Tasks</h3>
            <p className="text-muted-foreground">
              Quizzes, coding challenges, and projects generated specifically for your learning level.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-3">Skill Tracking</h3>
            <p className="text-muted-foreground">
              Visualize your progress with interactive skill radars and performance dashboards.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-3">Model Selection</h3>
            <p className="text-muted-foreground">
              Choose from Mistral, OpenAI, Anthropic, or Google models to power your learning.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 border-t text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Learnsphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
