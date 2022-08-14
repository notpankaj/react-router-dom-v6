import React from "react";
import { Outlet } from "react-router-dom";

function SharedProductLayout() {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
}

export default SharedProductLayout;
