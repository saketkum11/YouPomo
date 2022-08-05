import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Signup, Timer } from "../Pages";
import { NotFound } from "../Pages/NotFound";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
