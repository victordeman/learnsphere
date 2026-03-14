"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"

const trustPartners = [
  "Hugging Face",
  "Together.ai",
  "xAI",
  "Google",
  "Zhipu",
]

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="currentColor" />
              <line x1="50" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-16 md:py-24">
        <AnimateOnScroll>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Adaptive AI Learning{" "}
          <span className="text-teal-600 dark:text-teal-400">for Every Mind</span>
        </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Personalized pathways powered by Qwen3, MiniMax, Grok, and Gemini.
          Master any skill with instant evaluation and adaptive tasks.
        </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#learn"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-teal-600/20"
            )}
          >
            Start Learning Free
          </Link>
          <Link
            href="/admin"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-8 py-6 text-lg rounded-xl border-slate-300 dark:border-slate-700"
            )}
          >
            For Educators &amp; Admins
          </Link>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.45}>
        {/* Trust bar */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">
            Powered by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustPartners.map((partner) => (
              <span
                key={partner}
                className="text-slate-400 dark:text-slate-600 font-medium text-sm"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
