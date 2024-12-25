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

function App() {
  return (
    <div>
      <h1>header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="features" element={<Features />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
