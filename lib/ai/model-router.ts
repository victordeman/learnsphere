import { createOpenAI } from '@ai-sdk/openai';
import { createHuggingFace } from '@ai-sdk/huggingface';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export type ModelProvider = 'openai' | 'huggingface' | 'anthropic' | 'google' | 'together' | 'moonshot' | 'zhipu' | 'xai';

export function getModel(provider: ModelProvider, modelId: string) {
  switch (provider) {
    case 'openai':
      return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })(modelId);
    case 'huggingface':
      return createHuggingFace({ apiKey: process.env.HUGGINGFACE_API_KEY })(modelId);
    case 'anthropic':
      return createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })(modelId);
    case 'google':
      return createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY })(modelId);
    default:
      // Fallback to OpenAI if provider not found
      return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })(modelId);
  }
}

export const defaultModel = getModel('huggingface', 'mistralai/Mistral-7B-Instruct-v0.2');
