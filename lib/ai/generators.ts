import { generateObject } from 'ai';
import { getModel, ModelProvider } from './model-router';
import { QuizSchema, CodingTaskSchema } from './schemas';

export async function generateQuiz(topic: string, provider: ModelProvider = 'openai', modelId: string = 'gpt-4o') {
  const model = getModel(provider, modelId);
  const { object } = await generateObject({
    model,
    schema: QuizSchema,
    prompt: `Generate a multiple choice quiz question about ${topic}.`,
  });
  return object;
}

export async function generateCodingTask(topic: string, provider: ModelProvider = 'openai', modelId: string = 'gpt-4o') {
  const model = getModel(provider, modelId);
  const { object } = await generateObject({
    model,
    schema: CodingTaskSchema,
    prompt: `Generate a coding task related to ${topic}. Include initial code, language, and test cases.`,
  });
  return object;
}
