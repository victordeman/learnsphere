import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DocsPage() {
  const filePath = path.join(process.cwd(), 'docs', 'architecture.md');
  let content = 'Documentation not found.';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading documentation file:', error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">Learnsphere</Link>
          <span className="text-muted-foreground">/</span>
          <h1 className="text-xl font-semibold">Documentation</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none">
          {/* Simple markdown rendering for now, can be enhanced with a proper library if needed */}
          {content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) return <h1 key={index} className="text-4xl font-bold mb-6 mt-8">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mb-4 mt-6 border-b pb-2">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={index} className="text-xl font-bold mb-3 mt-4">{line.replace('### ', '')}</h3>;
            if (line.startsWith('- ')) {
              return (
                <li key={index} className="ml-6 mb-1 text-muted-foreground">
                  {line.replace('- ', '').split(/(\*\*.*?\*\*)/).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </li>
              );
            }
            if (line.trim() === '') return <br key={index} />;
            return (
              <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                {line.split(/(\*\*.*?\*\*)/).map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
      </main>

      <footer className="py-10 px-6 border-t text-center text-muted-foreground mt-12">
        <p>&copy; {new Date().getFullYear()} Learnsphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
