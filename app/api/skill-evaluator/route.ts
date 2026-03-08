import { NextResponse } from 'next/server';
import { evaluatePerformance } from '@/lib/ai/evaluators';

export async function POST(req: Request) {
  try {
    const { submissions, provider, modelId } = await req.json();

    // Skill evaluator can use the same logic as performance evaluator but focus on specific skill keys
    const result = await evaluatePerformance(submissions, provider, modelId);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
