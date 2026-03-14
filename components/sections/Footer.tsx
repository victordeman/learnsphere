"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"

const footerLinks = {
  Product: [
    { label: "Learn", href: "#learn" },
    { label: "Engines", href: "#engines" },
    { label: "Pricing", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Research", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                LS
              </div>
              <span className="font-semibold text-lg tracking-tighter text-slate-900 dark:text-white">
                LearnSphere
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Adaptive AI learning for every mind. Built for the future of education.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </AnimateOnScroll>

        <Separator className="my-10 bg-slate-200 dark:bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} LearnSphere Oracle. Built for the future of learning.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nbunaira/learnsphere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              Made with love on Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
