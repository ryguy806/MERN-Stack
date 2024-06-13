import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Transactions from "../pages/Transactions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/transactions' element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
