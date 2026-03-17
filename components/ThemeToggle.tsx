"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSyncExternalStore } from "react"

function subscribe() {
  return () => {}
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun className="size-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-5 text-amber-400" />
      ) : (
        <Moon className="size-5 text-slate-600" />
      )}
    </Button>
  )
}
