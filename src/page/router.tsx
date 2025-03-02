import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import Notion from "./notion";
export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/notion" element={<Notion />} />
    </Routes>
  );
};
