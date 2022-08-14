import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import SharedProductLayout from "./pages/SharedProductLayout";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  const [user, setUser] = useState(null);
  return (
    // ! noraml Routes
    // <BrowserRouter>
    //   <nav>our navbar</nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    //   <footer>our footer</footer>
    // </BrowserRouter>
    // !outlet Nested Routes
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="about" element={<About />} />
    //       <Route path="products" element={<Products />} />
    //       <Route path="*" element={<Error />} />
    //     </Route>
    //     <Route path="dashboard" element={<div>dashboard</div>}>
    //       <Route path="stats" element={<div>stats</div>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // !outlet sharedlayout Routes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* ------------ */}
          {/* <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} /> */}
          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          {/* ------------ */}
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
