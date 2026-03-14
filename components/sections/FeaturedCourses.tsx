"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll, StaggerChildren, staggerItemVariants } from "@/components/AnimateOnScroll"
import { motion } from "framer-motion"

const courses = [
  {
    title: "Neo4j Graph Databases",
    description:
      "Learn graph modeling, Cypher queries, and knowledge graphs with AI-guided projects.",
    tags: ["Intermediate", "Databases", "Quiz"],
    image: "/images/course-graph.jpg",
    status: "Start",
  },
  {
    title: "Claude Code Mastery",
    description:
      "Master AI-assisted coding with prompt engineering, pair programming, and code review.",
    tags: ["Beginner", "Coding", "Project"],
    image: "/images/course-code.jpg",
    status: "Start",
  },
  {
    title: "Deep Learning Foundations",
    description:
      "Neural networks, backpropagation, and CNNs with adaptive lecture modules and quizzes.",
    tags: ["Advanced", "AI/ML", "Lecture"],
    image: "/images/course-dl.jpg",
    status: "Continue",
  },
  {
    title: "Research Methods & Design",
    description:
      "Experimental design, statistical analysis, and academic writing with AI feedback.",
    tags: ["Beginner", "Research", "Quiz"],
    image: "/images/course-research.jpg",
    status: "Start",
  },
]

export function FeaturedCourses() {
  return (
    <section id="learn" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Learning Across LearnSphere
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Choose your path &mdash; or let the AI build it for you
          </p>
        </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={staggerItemVariants}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-teal-50 to-slate-100 dark:from-teal-950/50 dark:to-slate-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-teal-600/10 dark:bg-teal-400/10 flex items-center justify-center">
                    <span className="text-teal-600 dark:text-teal-400 font-bold text-xl">
                      {course.title.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  size="sm"
                >
                  {course.status}
                </Button>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
