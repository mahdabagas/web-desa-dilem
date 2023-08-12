import { Navigate, Outlet } from "react-router-dom";

export let auth = { token: false };

const AdminRoutes = () => {
  return auth.token ? <Outlet /> : <Navigate to="/masuk" />;
};

export default AdminRoutes;
