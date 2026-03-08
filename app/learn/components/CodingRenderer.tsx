'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CodingRenderer({ content }: { content: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{content.title || 'Coding Task'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{content.description}</p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>{content.initialCode}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
