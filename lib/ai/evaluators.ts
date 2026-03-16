import { generateObject } from 'ai';
import { getModel, ModelProvider } from './model-router';
import { EvaluationSchema, PerformanceSchema } from './schemas';

export async function evaluateSubmission(
  taskContent: unknown,
  submission: unknown,
  provider: ModelProvider = 'openai',
  modelId: string = 'gpt-4o'
) {
  const model = getModel(provider, modelId);
  const { object } = await generateObject({
    model,
    schema: EvaluationSchema,
    prompt: `Evaluate the following submission for the given task.
    Task: ${JSON.stringify(taskContent)}
    Submission: ${JSON.stringify(submission)}`,
  });
  return object;
}

export async function evaluatePerformance(
  submissions: unknown[],
  provider: ModelProvider = 'openai',
  modelId: string = 'gpt-4o'
) {
  const model = getModel(provider, modelId);
  const { object } = await generateObject({
    model,
    schema: PerformanceSchema,
    prompt: `Based on these submissions, evaluate the user's current skill levels and overall progress.
    Submissions: ${JSON.stringify(submissions)}`,
  });
  return object;
}
