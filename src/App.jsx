import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Products from "./component/Products/Products";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Brands from "./component/Brands/Brands";
import Carts from "./component/Carts/Carts";
import Notfound from "./component/Notfound/Notfound";
import CounterContextProvider from "./context/counterContext";
import UserContextProvider from "./context/userContext";
import ProductedRoutes from "./component/ProductedRoutes/ProductedRoutes";
import ProductDetails from "./component/ProductDetails/ProductDetails";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProductedRoutes>
            <Products />
          </ProductedRoutes>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "brands",
        element: (
          <ProductedRoutes>
            <Brands />
          </ProductedRoutes>
        ),
      },
      {
        path: "carts",
        element: (
          <ProductedRoutes>
            <Carts />
          </ProductedRoutes>
        ),
      },
      { path: "productDetails/:id", element: <ProductDetails /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <CounterContextProvider>
          <RouterProvider router={routers}></RouterProvider>
        </CounterContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
