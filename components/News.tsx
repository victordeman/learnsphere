"use client"

import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll, StaggerChildren, staggerItemVariants } from "@/components/AnimateOnScroll"
import { motion } from "framer-motion"

const newsItems = [
  {
    date: "March 5, 2026",
    category: "New Model",
    categoryColor: "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400",
    title: "MiniMax M2.5 Now Powers All Coding Tasks",
    teaser:
      "Our model router now defaults to MiniMax M2.5 for coding exercises, delivering 40% faster evaluation with improved accuracy.",
  },
  {
    date: "February 28, 2026",
    category: "Feature",
    categoryColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
    title: "Skill Radar Dashboard Goes Live",
    teaser:
      "Visualize your competencies across all domains with our new interactive radar chart powered by real-time performance data.",
  },
  {
    date: "February 20, 2026",
    category: "Research",
    categoryColor: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
    title: "Adaptive Task Sequencing Paper Published",
    teaser:
      "Our research on AI-driven curriculum adaptation has been accepted at EDM 2026. Read the preprint on arXiv.",
  },
  {
    date: "February 12, 2026",
    category: "Feature",
    categoryColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
    title: "Multi-Language Support for Coding Tasks",
    teaser:
      "Python, JavaScript, Rust, and Go are now fully supported with syntax-aware evaluation and inline feedback.",
  },
]

export function News() {
  return (
    <section id="news" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            News &amp; Platform Updates
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Stay up to date with the latest improvements and research
          </p>
        </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {newsItems.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItemVariants}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-slate-400 dark:text-slate-500">
                  {item.date}
                </span>
                <Badge
                  className={`text-xs font-medium ${item.categoryColor}`}
                >
                  {item.category}
                </Badge>
              </div>

              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {item.teaser}
              </p>

              <a
                href="#"
                className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                Read more &rarr;
              </a>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
