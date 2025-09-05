import { useState } from "react";
import { useLocation, useNavigate, type Location } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  interface LocationState {
    from?: Location;
  }
  const location = useLocation<LocationState>();
  const from = location.state?.from?.pathname || "/projects";

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
      <label className="block">
        <span className="mb-1 block">Username</span>
        <input
          id="username"
          className="w-full rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-800"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="mb-1 block">Password</span>
        <input
          id="password"
          className="w-full rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-800"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="rounded bg-sky-600 px-3 py-2 text-white hover:bg-sky-700">
        Sign in
      </button>
    </form>
  );
}
