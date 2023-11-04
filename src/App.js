import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Visitors from "./components/visitors/visitorsListing/Visitors";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddVisitors from "./components/visitors/visitorAdd/AddVisitors";
import ViewVisitor from "./components/visitors/visitorView/ViewVisitor";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />

        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Navigate to="visitors" replace /> } />
          <Route path="/visitors" element={ <Visitors /> } />
          <Route path="/addvisitors" element={ <AddVisitors /> } />
          <Route
            path={ "/visitors/visitor/:id" }
            element={
              <ViewVisitor />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
