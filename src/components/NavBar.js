import React from "react";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div>NavBar</div>
      <Outlet />
    </div>
  );
}

export default NavBar;
