import React from "react";
import DashboardLayout from "./DashBoardLayout";
import Project from "../../LandingPage/projects/Projects";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <Project />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
