'use client';

import { QuizRenderer } from './QuizRenderer';
import { CodingRenderer } from './CodingRenderer';
import { LectureRenderer } from './LectureRenderer';
import { ProjectRenderer } from './ProjectRenderer';

interface Task {
  id: string;
  type: 'quiz' | 'coding' | 'lecture' | 'project';
  content: any;
}

export function TaskInterface({ task }: { task: Task }) {
  switch (task.type) {
    case 'quiz':
      return <QuizRenderer content={task.content} />;
    case 'coding':
      return <CodingRenderer content={task.content} />;
    case 'lecture':
      return <LectureRenderer content={task.content} />;
    case 'project':
      return <ProjectRenderer content={task.content} />;
    default:
      return <div>Unknown task type</div>;
  }
}
