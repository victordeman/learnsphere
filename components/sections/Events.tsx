"use client"

import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerChildren, staggerItemVariants } from "@/components/AnimateOnScroll"
import { motion } from "framer-motion"

const events = [
  {
    title: "Live Model-Routing Demo",
    date: "March 15, 2026",
    time: "2:00 PM UTC",
    description:
      "Watch how LearnSphere intelligently routes tasks to the best AI model in real-time. Live Q&A included.",
  },
  {
    title: "Admin Training Workshop",
    date: "March 22, 2026",
    time: "10:00 AM UTC",
    description:
      "Learn to configure courses, manage learners, and leverage analytics for better educational outcomes.",
  },
  {
    title: "Student Showcase & Hackathon",
    date: "April 5, 2026",
    time: "9:00 AM UTC",
    description:
      "Join fellow learners to present projects built with LearnSphere. Prizes for most creative AI applications.",
  },
]

export function Events() {
  return (
    <section
      id="events"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Join the Community
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Upcoming events and live sessions to accelerate your learning
          </p>
        </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {events.map((event) => (
            <motion.div
              key={event.title}
              variants={staggerItemVariants}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                <Calendar className="size-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-5">
                <Clock className="size-4" />
                <span>{event.time}</span>
              </div>

              <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-3">
                {event.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {event.description}
              </p>

              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                Register
              </Button>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
