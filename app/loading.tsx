export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo skeleton */}
        <div className="w-12 h-12 bg-teal-600/20 dark:bg-teal-400/20 rounded-2xl animate-pulse" />

        {/* Loading bars */}
        <div className="flex flex-col items-center gap-3 w-64">
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
          <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
          <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
        </div>

        <p className="text-sm text-slate-400 dark:text-slate-500 animate-pulse">
          Loading LearnSphere...
        </p>
      </div>
    </div>
  )
}
