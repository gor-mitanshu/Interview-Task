import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./components/protectedRoute/authContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={ 2000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        draggable
        pauseOnHover
      />
    </AuthProvider>
  </React.StrictMode>
);
