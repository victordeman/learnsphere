"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Learn", href: "#learn" },
  { label: "Engines", href: "#engines" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
  { label: "For Educators", href: "/admin" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
            LS
          </div>
          <div>
            <div className="font-semibold text-xl tracking-tighter text-slate-900 dark:text-white">
              LearnSphere
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 -mt-1 tracking-wide">
              ORACLE
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/profile"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex bg-teal-600 hover:bg-teal-700 text-white"
            )}
          >
            Learner Portal
          </Link>
          <Link
            href="/auth/signin"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Sign In
          </Link>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="text-lg font-semibold mb-6">Menu</SheetTitle>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-700 dark:text-slate-300 font-medium text-lg hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-2 flex flex-col gap-3">
                  <Link
                    href="/profile"
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "bg-teal-600 hover:bg-teal-700 text-white"
                    )}
                  >
                    Learner Portal
                  </Link>
                  <Link
                    href="/auth/signin"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
