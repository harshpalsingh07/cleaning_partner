import { useState } from "react";
import Layout from "./Frontend/Layout";
import AdminLayout from "./Admin/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Frontend/pages/Home";
import Signup from "./Frontend/Pages/Signup";
import Login from "./Frontend/pages/Login";
import Dashboard from "./Admin/pages/Dashboard";
import categoryRoutes from "./Admin/routes/categoryRoutes.jsx";
import serviceRoutes from "./Admin/routes/serviceRoutes.jsx";
import Services from "./Frontend/pages/Services";
import ServiceBook from "./Frontend/pages/ServiceBook.jsx";
import bookingRoutes from "./Admin/routes/bookingRoutes.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" exect element={<Home />} />
            <Route path="/sign-up" exect element={<Signup />} />
            <Route path="/login" exect element={<Login />} />
            <Route path="/services" exect element={<Services />} />
            <Route path="/service/:id" exect element={<ServiceBook />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" exect element={<Dashboard />} />
            {categoryRoutes}
            {serviceRoutes}
            {bookingRoutes}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
