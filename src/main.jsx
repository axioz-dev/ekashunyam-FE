import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import { Toaster, ToastBar } from "react-hot-toast";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const Rules = React.lazy(() => import("../src/Pages/Rules"));
const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const GlobalError = React.lazy(() => import("./Pages/GlobalError"));
const Registration = React.lazy(() => import("./Pages/FestRegistration"));

axios.defaults.baseURL = "https://ekashunyam-be.onrender.com/";
// axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements([
    [
      <Route path="/">
        <Route path="" element={<Home />} />
        <Route path="/event/:eventId" element={<Rules />} />
      </Route>,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Registration />} />,
      <Route path="*" element={<GlobalError />} />,
    ],
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div className="text-white">Loading...</div>}>
    <RouterProvider router={router} />
    <Toaster
      renderToast={(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible
              ? "custom-enter 0s ease"
              : "custom-exit 0.01s ease",
          }}
        />
      )}
      toastOptions={{
        className: "",
        style: {
          fontFamily: "megatron",
          border: "1px solid #713200",
          paddingInline: "16px",
          color: "white",
          background: "black",
        },
        containerStyle: {
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        },
      }}
      gutter={10} // Space between toast notifications
    />
  </Suspense>
);
