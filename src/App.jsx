import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Projects />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Profile />
              </MainLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
