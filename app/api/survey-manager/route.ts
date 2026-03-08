import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { surveyData } = await req.json();

    // In a real app, save to Supabase
    console.log('Survey data received:', surveyData);

    return NextResponse.json({ success: true, message: 'Survey submitted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  // Return survey configurations
  return NextResponse.json({
    surveys: [
      { id: 'onboarding', title: 'Onboarding Survey' },
      { id: 'module-feedback', title: 'Module Feedback' }
    ]
  });
}
