import React from "react";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Link, Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>

      {/* <nav>
        <Link to="add-job">add job</Link>
        <Link to="all-jobs">all job</Link>
      </nav> */}
    </Wrapper>
  );
};

export default SharedLayout;
