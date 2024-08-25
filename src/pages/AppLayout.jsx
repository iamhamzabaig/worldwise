import React from "react";
import { Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div>AppLayout</div>
      <Link to={"/"}>Go to Home</Link>
    </>
  );
}
