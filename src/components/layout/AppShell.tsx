import React from "react";
import { useAuth } from "../../features/auth/AuthContext";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const { token, logout } = useAuth();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-700">
        <div className="mx-auto max-w-6xl p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">
            Project Tracker
          </h1>
          <div className="text-sm text-slate-500">
            {token ? (
              <button
                onClick={logout}
                className="rounded bg-slate-200 px-3 py-1 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
              >
                Logout
              </button>
            ) : (
              <span>Guest</span>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-4">{children}</main>
    </div>
  );
}
