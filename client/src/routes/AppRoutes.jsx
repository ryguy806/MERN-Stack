import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Transactions from "../pages/Transactions";
import Geography from "../pages/Geography";
import Overview from "../pages/Overview";
import Daily from "../pages/Daily";
import Monthly from "../pages/Monthly";
import Breakdown from "../pages/Breakdown";
import Admin from "../pages/Admin";
import Performance from "../pages/Performance";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/geography' element={<Geography />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/daily' element={<Daily />} />
        <Route path='/monthly' element={<Monthly />} />
        <Route path='/breakdown' element={<Breakdown />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/performance' element={<Performance />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
