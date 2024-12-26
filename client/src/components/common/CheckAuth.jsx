import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const loaction = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register"))
  ) {
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    user.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/shop/home" />;
  }

  if (
    isAuthenticated &&
    user.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
};

export default CheckAuth;
