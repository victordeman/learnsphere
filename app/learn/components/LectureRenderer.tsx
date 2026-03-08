'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LectureRenderer({ content }: { content: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{content.title || 'Lecture'}</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert max-w-none">
        <p>{content.text}</p>
      </CardContent>
    </Card>
  );
}
