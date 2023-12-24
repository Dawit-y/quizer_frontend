import React, { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import queryString from "query-string";

const HomeLayout = () => {
  const { googleAuthenticate } = useAuth();
  const location = useLocation();
  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;
    console.log("State: " + state);
    console.log("Code: " + code);
    if (state && code) {
      googleAuthenticate(state, code);
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
