export default function Home() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium">Welcome 👋</h2>
      <p className="text-slate-600 dark:text-slate-300">
        This is the placeholder home page. We’ll add navigation and real pages
        next.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="font-semibold">Projects</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            List of projects (coming soon).
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="font-semibold">Tasks</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Kanban board (coming soon).
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="font-semibold">Account</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            User settings (coming soon).
          </p>
        </div>
      </div>
    </section>
  );
}
