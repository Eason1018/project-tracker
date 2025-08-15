import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/projects";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await login(username, password); // fake login
    navigate(from, { replace: true });
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm space-y-4">
      <h2 className="text-lg font-medium">Login</h2>
      <input
        className="w-full rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-800"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-800"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="rounded bg-sky-600 px-3 py-2 text-white hover:bg-sky-700">
        Sign in
      </button>
    </form>
  );
}
