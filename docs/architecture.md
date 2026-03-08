# Learnsphere Architecture

## Overview
Learnsphere is an adaptive learning platform designed to provide a personalized academic experience through AI-driven task generation and evaluation.

## Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **AI Integration:** Vercel AI SDK (@ai-sdk)
- **Visualization:** Recharts

## Key Components

### AI Model Router (`lib/ai/model-router.ts`)
The router allows the system to switch between different AI providers (Hugging Face, OpenAI, Anthropic, etc.) based on the learner's preference or the task requirements.

### Polymorphic Task Interface (`app/learn/components/TaskInterface.tsx`)
A central component that renders different learning activities (Quiz, Coding, Lecture, Project) based on the task type.

### Database Schema (`supabase/migrations/`)
- `profiles`: User information and preferences.
- `courses`: High-level curriculum.
- `modules`: Specific chapters within a course.
- `tasks`: Individual learning items (JSONB content).
- `submissions`: User responses and AI evaluations.

## Security
Role-based access control is implemented via Next.js middleware, ensuring that only authenticated learners can access courses and only admins can access the management dashboard.
