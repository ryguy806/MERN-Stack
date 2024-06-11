const { Routes, Route } = "react-router-dom";
import Home from "../pages/Home";
import Layout from "components/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
