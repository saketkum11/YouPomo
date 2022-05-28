import { Route, Routes } from "react-router-dom";
import { Timer } from "../Pages";
import Mockman from "mockman-js";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/dashboard" element={<Timer />} />
        <Route path="/login" element={<Timer />} />
        <Route path="/signup" element={<Timer />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
