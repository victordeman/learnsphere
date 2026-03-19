# LearnSphere Oracle — Full Development Task List

> Last updated: March 9, 2026
> Repo: https://github.com/nbunaira/learnsphere

---

## Phase 1 — Project Scaffolding & Homepage (COMPLETED)

- [x] Initialize Next.js 16 project with TypeScript + Tailwind CSS v4
- [x] Install and configure shadcn/ui (base-nova style), lucide-react, framer-motion, next-themes
- [x] Set up global design system (color palette, typography, spacing, dark mode)
- [x] Update `app/globals.css` with academic theme variables and smooth scroll
- [x] Update `app/layout.tsx` with Inter font, ThemeProvider, SEO metadata
- [x] Build `ThemeToggle` component (sun/moon icon, system default)
- [x] Build sticky `Header` with logo, desktop nav, mobile Sheet hamburger menu, Learner Portal + Sign In buttons
- [x] Build `Hero` section (gradient, SVG circuit pattern, headline, CTAs, trust bar)
- [x] Build `FeaturedCourses` section (4-column responsive grid, hover effects, skill tags)
- [x] Build `Engines` section (Task Generator, Skill Evaluator, Performance Evaluator, Survey Manager cards)
- [x] Build `News` section (4-column grid with date/category badges)
- [x] Build `Events` section (3-column calendar cards with Register CTAs)
- [x] Build `Footer` (5-column layout, brand, links, GitHub, copyright)
- [x] Assemble `app/page.tsx` with all section components
- [x] Pass lint and build checks
- [x] Create PR #1

---

## Phase 2 — Authentication & User Management (IN PROGRESS)

- [x] Set up Supabase client (`lib/db/client.ts`) and environment variables (`.env.example`)
- [ ] Create Supabase migration `001_initial_schema.sql` (profiles, roles, sessions)
- [ ] Generate Supabase types (`supabase/types.ts`, `lib/db/types.ts`)
- [ ] Implement `middleware.ts` for auth + role-based route protection
- [ ] Build auth pages: `app/(auth)/` route group
  - [ ] Sign In page (`/auth/signin`)
  - [ ] Sign Up page (`/auth/signup`)
  - [ ] Password reset flow
- [ ] Build Learner Profile page (`app/(auth)/profile/page.tsx`)
  - [ ] Profile info display and edit
  - [ ] Model preference selector (Qwen3, MiniMax, Grok, Gemini, etc.)
  - [ ] Learning history overview
- [ ] Build Admin Dashboard shell (`app/(auth)/admin/page.tsx`)
  - [ ] Admin-only route guard
  - [ ] Dashboard layout with sidebar navigation

---

## Phase 3 — AI Model Router & Core Infrastructure

- [ ] Create Zod-validated config (`config/index.ts`) for all API keys and settings
- [ ] Build AI model router (`lib/ai/model-router.ts`)
  - [ ] Default to Hugging Face free tier
  - [ ] Support switching to Qwen3, MiniMax (Kimi), GLM, Grok, Gemini
  - [ ] Together.ai integration for fallback
  - [ ] Smart routing logic (task type → best model)
- [ ] Define all Zod schemas for structured AI outputs (`lib/ai/schemas.ts`)
  - [ ] Quiz schema (MCQ, true/false, short answer)
  - [ ] Coding exercise schema
  - [ ] Lecture module schema
  - [ ] Project brief schema
  - [ ] Evaluation rubric schema
  - [ ] Survey schema
- [ ] Set up Vercel AI SDK integration for streaming responses
- [ ] Create `.env.example` with all required API keys (HF, Together, Moonshot, Zhipu, xAI, Google)

---

## Phase 4 — Task Generator Engine

- [ ] Build task generation prompts (`lib/ai/generators.ts`)
  - [ ] Quiz generation (adaptive difficulty)
  - [ ] Coding exercise generation (multi-language: Python, JS, Rust, Go)
  - [ ] Lecture content generation (structured modules with sections)
  - [ ] Project brief generation (milestones, rubrics, deliverables)
- [ ] Create API route `app/api/task-generator/route.ts`
  - [ ] Accept task type, skill level, topic, model preference
  - [ ] Stream structured output via Vercel AI SDK
  - [ ] Validate output against Zod schemas
- [ ] Build "Try it now" demo modal on homepage (triggered from Engines section)
  - [ ] Streaming task generation preview
  - [ ] Model selector dropdown

---

## Phase 5 — Learning Experience (Student-Facing)

- [ ] Create Supabase migrations for courses, modules, tasks, submissions tables
- [ ] Build dynamic learning page (`app/learn/[courseId]/[moduleId]/page.tsx`)
- [ ] Build `TaskInterface.tsx` — polymorphic renderer that switches between:
  - [ ] `QuizRenderer.tsx` — MCQ, true/false, short answer with timer
  - [ ] `CodingRenderer.tsx` — code editor (Monaco or CodeMirror), run/submit
  - [ ] `LectureRenderer.tsx` — structured content with progress tracking
  - [ ] `ProjectRenderer.tsx` — milestone tracker, file upload, rubric display
- [ ] Build `SidebarProgress.tsx` — module navigation + completion status
- [ ] Implement course catalog page (`app/learn/page.tsx`)
- [ ] Seed sample courses and modules (`scripts/seed.ts`)
- [ ] Create `app/loading.tsx` — global loading UI with skeleton screens

---

## Phase 6 — Evaluation Engines

- [ ] Build evaluation rubrics and logic (`lib/ai/evaluators.ts`)
  - [ ] Task-level evaluation (per-submission scoring)
  - [ ] Skill-level evaluation (aggregate across tasks)
  - [ ] Performance-level evaluation (holistic learner profile)
- [ ] Create API routes:
  - [ ] `app/api/task-evaluator/route.ts` — instant rubric-based feedback per submission
  - [ ] `app/api/skill-evaluator/route.ts` — skill domain scoring and gap analysis
  - [ ] `app/api/performance-evaluator/route.ts` — holistic scoring + next-step recommendations
- [ ] Build `PerformanceDashboard.tsx` component
  - [ ] Overall score display
  - [ ] Skill breakdown table
  - [ ] Progress over time chart (Recharts)
  - [ ] Next-step recommendations panel
- [ ] Build `SkillRadar.tsx` component
  - [ ] Interactive radar chart (Recharts)
  - [ ] Skill domain visualization across all courses
- [ ] Create `lib/utils/performance.ts` — skill radar calculations

---

## Phase 7 — Survey Manager

- [ ] Create Supabase migration for surveys, survey_responses tables
- [ ] Build survey generation logic in `lib/ai/generators.ts`
  - [ ] Adaptive baseline survey (on first login)
  - [ ] Post-task satisfaction micro-surveys
  - [ ] Periodic learning preference surveys
- [ ] Create API route `app/api/survey-manager/route.ts`
  - [ ] Generate survey questions
  - [ ] Submit and store responses
  - [ ] Analyze responses to refine learner profile
- [ ] Build survey UI components (embedded in learning flow)

---

## Phase 8 — Admin Dashboard (Full)

- [ ] Create API route `app/api/admin/route.ts`
  - [ ] Bulk task generation for courses
  - [ ] Learner analytics (aggregated performance data)
  - [ ] Course/module CRUD operations
- [ ] Build Admin Dashboard pages:
  - [ ] Course management (create, edit, delete courses and modules)
  - [ ] Learner management (view profiles, performance, engagement)
  - [ ] Analytics dashboard (charts: enrollment, completion rates, model usage)
  - [ ] Bulk task generator interface
  - [ ] Survey results viewer
- [ ] Admin role verification on all admin routes

---

## Phase 9 — Mermaid Diagrams & Visual Aids

- [ ] Build `lib/utils/mermaid.ts` — Mermaid diagram rendering utility
- [ ] Integrate Mermaid diagrams into:
  - [ ] Lecture modules (flowcharts, sequence diagrams)
  - [ ] Performance dashboard (learning path visualization)
  - [ ] Admin analytics (system architecture diagrams)
- [ ] Add diagram support to task generator (auto-generate visual aids)

---

## Phase 10 — Polish, Animations & Accessibility

- [ ] Add Framer Motion entrance animations on scroll to all homepage sections
- [ ] Add page transition animations between routes
- [ ] Ensure full keyboard navigation across all interactive elements
- [ ] Add ARIA labels and roles to all custom components
- [ ] Responsive testing: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Add loading skeletons for all data-fetching components
- [ ] Optimize images with `next/image` (placeholder="blur", proper sizing)
- [ ] Add Open Graph and Twitter Card metadata for social sharing

---

## Phase 11 — Deployment & Production

- [ ] Configure `vercel.json` (edge functions, rewrites, headers)
- [ ] Set up Supabase production project and migrate schema
- [ ] Configure all production environment variables on Vercel
- [ ] Set up Vercel Analytics and Speed Insights
- [ ] Configure domain and SSL
- [ ] Production smoke testing (all flows end-to-end)
- [ ] Performance audit (Lighthouse: target 90+ across all categories)
- [ ] Security audit (CSP headers, input sanitization, rate limiting)

---

## Phase 12 — Documentation

- [ ] Update `README.md` with 2026 architecture overview and setup instructions
- [ ] Write `docs/architecture.md` — system design, model routing, data flow
- [ ] Write `docs/api.md` — all API route documentation with request/response examples
- [ ] Write `docs/setup.md` — local development setup guide
- [ ] Add inline JSDoc comments to all public functions and components

---

## Summary

| Phase | Description                        | Status       |
|-------|------------------------------------|--------------|
| 1     | Project Scaffolding & Homepage     | COMPLETED    |
| 2     | Authentication & User Management   | IN PROGRESS  |
| 3     | AI Model Router & Core Infra       | Not Started  |
| 4     | Task Generator Engine              | Not Started  |
| 5     | Learning Experience (Student)      | Not Started  |
| 6     | Evaluation Engines                 | Not Started  |
| 7     | Survey Manager                     | Not Started  |
| 8     | Admin Dashboard (Full)             | Not Started  |
| 9     | Mermaid Diagrams & Visual Aids     | Not Started  |
| 10    | Polish, Animations & Accessibility | Not Started  |
| 11    | Deployment & Production            | Not Started  |
| 12    | Documentation                      | Not Started  |
