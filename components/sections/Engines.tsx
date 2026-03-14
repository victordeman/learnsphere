"use client"

import { Sparkles, CheckCircle, TrendingUp, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerChildren, staggerItemVariants } from "@/components/AnimateOnScroll"
import { motion } from "framer-motion"

const engines = [
  {
    icon: Sparkles,
    title: "Task Generator",
    description:
      "Creates perfect quizzes, coding exercises, lectures & projects tailored to your skill level using multi-model AI routing.",
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: CheckCircle,
    title: "Skill & Task Evaluator",
    description:
      "Instant, rubric-based feedback with intelligent model switching. Get detailed analysis on every submission.",
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
  },
  {
    icon: TrendingUp,
    title: "Performance Evaluator",
    description:
      "Holistic scoring, skill radar visualization, and next-step recommendations to accelerate your learning journey.",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: ClipboardList,
    title: "Survey Manager",
    description:
      "Adaptive baseline and satisfaction surveys that continuously refine your personalized learning experience.",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
]

export function Engines() {
  return (
    <section
      id="engines"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Engines of AI Learning
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Four powerful modules working together to create your perfect learning experience
          </p>
        </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {engines.map((engine) => {
            const Icon = engine.icon
            return (
              <motion.div
                key={engine.title}
                variants={staggerItemVariants}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${engine.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`size-7 ${engine.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-2">
                      {engine.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {engine.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-300 dark:border-slate-700 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 dark:hover:bg-teal-950/30 dark:hover:text-teal-400 dark:hover:border-teal-800"
                    >
                      Try it now
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
