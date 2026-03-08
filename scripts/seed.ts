import { supabase } from '../lib/db/client';

async function seed() {
  console.log('Seeding data...');

  const { data: course, error: cError } = await supabase
    .from('courses')
    .insert({
      title: 'Introduction to AI Engineering',
      description: 'Learn how to build applications using LLMs and modern AI SDKs.',
    })
    .select()
    .single();

  if (cError) {
    console.error('Error seeding course:', cError);
    return;
  }

  const { data: module, error: mError } = await supabase
    .from('modules')
    .insert({
      course_id: course.id,
      title: 'AI Model Routers',
      order_index: 1,
    })
    .select()
    .single();

  if (mError) {
    console.error('Error seeding module:', mError);
    return;
  }

  const { error: tError } = await supabase.from('tasks').insert([
    {
      module_id: module.id,
      type: 'quiz',
      order_index: 1,
      content: {
        question: 'Which provider is often used for open-source models?',
        options: ['OpenAI', 'Anthropic', 'Hugging Face', 'Google'],
        correctAnswer: 2,
      },
    },
    {
      module_id: module.id,
      type: 'coding',
      order_index: 2,
      content: {
        title: 'Basic Router Implementation',
        description: 'Implement a simple switch case for two AI providers.',
        initialCode: 'function getModel(provider) {\n  // your code\n}',
        language: 'typescript',
      },
    },
  ]);

  if (tError) {
    console.error('Error seeding tasks:', tError);
  } else {
    console.log('Successfully seeded database!');
  }
}

seed();
