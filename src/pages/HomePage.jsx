import React from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <>
      <PageNav />
      <h1>WorldWise</h1>
      <AppNav />
      <Link to={"/app"}>Go to the app</Link>
    </>
  );
}

export default HomePage;
