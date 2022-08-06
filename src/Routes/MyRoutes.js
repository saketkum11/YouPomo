import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Signup, Timer } from "../Pages";
import { NotFound } from "../Pages/NotFound";
import { RequireAuth } from "./RequireAuth";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Timer />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
