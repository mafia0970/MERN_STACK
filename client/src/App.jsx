import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/Admin/Layout";
import Dashboard from "./pages/Admin-view/Dashboard";
import Features from "./pages/Admin-view/Features";
import Orders from "./pages/Admin-view/Orders";
import Products from "./pages/Admin-view/Products";
import ShoppingLayout from "./components/Shopping/layout";
import { Home } from "lucide-react";
import Checkout from "./pages/Shopping-view/checkout";
import Account from "./pages/Shopping-view/acount";
import Listing from "./pages/Shopping-view/listing";
import ErrorPage from "./pages/Error-Page";
import CheckAuth from "./components/common/CheckAuth";

function App() {
  const isAuthenticated = false;
  const user = {
    role: "user",
  };
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="features" element={<Features />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="account" element={<Account />}></Route>
          <Route path="listing" element={<Listing />}></Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
