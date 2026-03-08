'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface QuizContent {
  question: string;
  options: string[];
  correctAnswer: number;
}

export function QuizRenderer({ content }: { content: QuizContent }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selectedOption === content.correctAnswer) {
      toast.success('Correct answer!');
    } else {
      toast.error('Incorrect. Try again.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{content.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {content.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedOption === index ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </Button>
        ))}
        <Button className="w-full" onClick={handleSubmit} disabled={selectedOption === null}>
          Submit Answer
        </Button>
      </CardContent>
    </Card>
  );
}
