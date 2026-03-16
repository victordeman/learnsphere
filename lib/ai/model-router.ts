import { createOpenAI } from '@ai-sdk/openai';
import { createHuggingFace } from '@ai-sdk/huggingface';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export type ModelProvider = 'openai' | 'huggingface' | 'anthropic' | 'google' | 'together' | 'moonshot' | 'zhipu' | 'xai' | 'minimax';

export const AVAILABLE_MODELS = [
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'openai', description: 'Advanced reasoning and creativity' },
  { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'anthropic', description: 'Fast and highly capable' },
  { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', provider: 'google', description: 'Multimodal and large context' },
  { id: 'qwen-2.5-72b', name: 'Qwen 2.5 72B', provider: 'huggingface', description: 'State-of-the-art open model' },
  { id: 'minimax-abab6.5', name: 'MiniMax-abab6.5', provider: 'minimax', description: 'Strong Chinese language performance' },
  { id: 'grok-1', name: 'Grok-1', provider: 'xai', description: 'Real-time knowledge and wit' },
] as const;

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
    case 'minimax':
      // MiniMax is currently handled via OpenAI compatibility or custom implementation
      // For now, fallback to OpenAI or implement MiniMax specific logic
      return createOpenAI({
        apiKey: process.env.MINIMAX_API_KEY,
        baseURL: 'https://api.minimax.chat/v1'
      })(modelId);
    case 'xai':
      return createOpenAI({
        apiKey: process.env.XAI_API_KEY,
        baseURL: 'https://api.x.ai/v1'
      })(modelId);
    default:
      // Fallback to OpenAI if provider not found
      return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })(modelId);
  }
}

export const defaultModel = getModel('huggingface', 'mistralai/Mistral-7B-Instruct-v0.2');
