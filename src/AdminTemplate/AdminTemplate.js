import React from "react";
import AdminLayout from "./layouts/Admin";
import { Redirect, Route } from "react-router";

import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AdminTemplate() {
  return (
    <Route
      path="/admin"
      render={(props) => {
        if (localStorage.getItem("UserAdmin")) {
          return <AdminLayout {...props} />;
        }
        return <Redirect to="/authentication"></Redirect>;
      }}
    />
  );
}
