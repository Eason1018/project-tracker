import { Routes, Route, Link } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./features/auth/ProtectedRoute";

export default function App() {
  return (
    <AppShell>
      {/* tiny nav for now */}
      <nav className="mb-6 flex gap-4 text-sm">
        <Link to="/" className="text-sky-700 dark:text-sky-400 underline">
          Home
        </Link>
        <Link
          to="/projects"
          className="text-sky-700 dark:text-sky-400 underline"
        >
          Projects
        </Link>
        <Link to="/login" className="text-sky-700 dark:text-sky-400 underline">
          Login
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}
