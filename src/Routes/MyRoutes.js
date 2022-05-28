import { Route, Routes } from "react-router-dom";
import { Timer } from "../Pages";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
