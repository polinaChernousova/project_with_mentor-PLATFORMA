import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/register/Login";
import Register from "./components/register/Register";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import { ProtectedRoutes } from "./helpers/functions";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

const PUBLIC_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },

  {
    link: "/login",
    element: <Login />,
    id: 2,
  },
  {
    link: "/register",
    element: <Register />,
    id: 3,
  },
  {
    link: "/detail/:id",
    element: <DetailPage />,
    id: 3,
  },
  {
    link: "/cart",
    element: <CartPage />,
    id: 4,
  },
];

export const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 2,
  },
];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      <Route element={<ProtectedRoutes />}>
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Route>

      <Route path="*" element={<p>There&apos;s nothing here: 404!</p>} />
    </Routes>
  );
};

export default MainRoutes;
