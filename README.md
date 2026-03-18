# LearnSphere Oracle – Adaptive AI Learning Platform

**LearnSphere Oracle** is a state-of-the-art adaptive learning platform designed to provide personalized education pathways for every learner. By leveraging multiple advanced AI models and a robust modern tech stack, LearnSphere Oracle transforms traditional learning into an interactive, AI-guided experience.

---

## 🚀 Key Features

### 🧠 The Engines of AI Learning
- **Task Generator**: Automatically creates quizzes, coding exercises, lectures, and projects tailored to your current skill level using multi-model AI routing.
- **Skill & Task Evaluator**: Provides instant, rubric-based feedback with intelligent model switching for detailed analysis on every submission.
- **Performance Evaluator**: Holistic scoring, skill radar visualization, and next-step recommendations to accelerate your learning journey.
- **Survey Manager**: Adaptive baseline and satisfaction surveys that continuously refine your personalized learning experience.

### 🤖 Multi-Model Support
LearnSphere Oracle integrates with leading AI providers to ensure the best performance for every task:
- **GPT-4o** (OpenAI)
- **Claude 3.5 Sonnet** (Anthropic)
- **Gemini 1.5 Pro** (Google)
- **Qwen 2.5 72B** (Hugging Face)
- **MiniMax-abab6.5** (MiniMax)
- **Grok-1** (xAI)

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend/Database**: [Supabase](https://supabase.com/) (Auth, PostgreSQL, SSR)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📊 Database Schema

The system uses a structured PostgreSQL schema managed via Supabase:
- `profiles`: User information and role-based access.
- `roles`: Defined access levels (`learner`, `admin`).
- `courses`: High-level learning paths.
- `modules`: Individual segments within a course.
- `tasks`: Specific learning activities (quizzes, coding, lectures, projects).
- `submissions`: User responses and AI-generated evaluations.
- `sessions`: Custom session tracking for user activity.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- A Supabase account and project
- API Keys for one or more AI providers (OpenAI, Anthropic, Google, etc.)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/learnsphere.git
   cd learnsphere
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # AI Providers (At least one required)
   OPENAI_API_KEY=your_openai_key
   ANTHROPIC_API_KEY=your_anthropic_key
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_key
   HUGGINGFACE_API_KEY=your_huggingface_key
   MINIMAX_API_KEY=your_minimax_key
   XAI_API_KEY=your_xai_key
   ```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚢 Deployment

### Deploying to Vercel
1. Push your code to a GitHub repository.
2. Import the project into [Vercel](https://vercel.com/).
3. Configure the Environment Variables in the Vercel dashboard (same as `.env.local`).
4. Vercel will automatically detect the Next.js framework and deploy your application.

### Supabase Integration
Ensure your Supabase project is configured with the following:
- Run the initial migration found in `supabase/migrations/001_initial_schema.sql` to set up the database schema and RLS policies.
- Configure Authentication (Email/Password or Social Providers) in the Supabase dashboard.
