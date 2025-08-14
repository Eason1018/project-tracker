import React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-700">
        <div className="mx-auto max-w-6xl p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">
            Project Tracker
          </h1>
          <div className="text-sm text-slate-500">User Menu</div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-4">{children}</main>
    </div>
  );
}
