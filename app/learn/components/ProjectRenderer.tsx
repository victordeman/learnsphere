'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProjectRenderer({ content }: { content: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{content.title || 'Project'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{content.description}</p>
        <div className="bg-muted p-4 rounded-md">
          <h4 className="font-bold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside">
            {content.requirements?.map((req: string, i: number) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
