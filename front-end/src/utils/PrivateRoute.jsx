import { Outlet, Navigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const PrivateRoute = () => {
  const auth = useAuthUser();
  const userId = auth()?.userId;

  return userId ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
