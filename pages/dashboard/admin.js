import Seo from "../../shared/layout-components/seo/seo"; 
import React from "react";
import Dashboard from "../../components/dashboard";

const AdminDashboard = () => {
  return (
      <div>
        <Seo title = {"Admin"} />
        <Dashboard /> 
      </div>
  )
}

AdminDashboard.layout = "Contentlayout"

export default AdminDashboard; 
