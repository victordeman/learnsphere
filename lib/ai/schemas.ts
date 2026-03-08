import { z } from 'zod';

export const QuizSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.number(),
  explanation: z.string(),
});

export const CodingTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  initialCode: z.string(),
  language: z.string(),
  tests: z.array(z.object({
    input: z.string(),
    expectedOutput: z.string(),
  })),
});

export const EvaluationSchema = z.object({
  score: z.number().min(0).max(100),
  feedback: z.string(),
  suggestions: z.array(z.string()),
});

export const PerformanceSchema = z.object({
  skills: z.record(z.string(), z.number().min(0).max(100)),
  overallProgress: z.number().min(0).max(100),
});
