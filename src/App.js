import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Visitors from "./components/visitors/visitorsListing/Visitors";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddVisitors from "./components/visitors/visitorAdd/AddVisitors";
import ViewVisitor from "./components/visitors/visitorView/ViewVisitor";
import './App.css';
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const App = () => {
  const ProtectedRoutes = ProtectedRoute();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />

        <Route path="/" element={ <ProtectedRoutes>
          <Layout /></ProtectedRoutes> }>
          <Route index element={ <Navigate to="visitors" replace /> } />
          <Route path="/visitors" element={ <ProtectedRoutes><Visitors /></ProtectedRoutes> } />
          <Route path="/addvisitors" element={ <ProtectedRoutes><AddVisitors /> </ProtectedRoutes> } />
          <Route
            path={ "/visitors/visitor/:id" }
            element={
              <ProtectedRoutes><ViewVisitor /></ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
