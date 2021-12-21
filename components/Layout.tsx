import React, { useState } from "react";
import Head from "next/head";
import ResponsiveAppBar from "./appbar/ResponsiveAppBar";
import Footer from "./Footer";
import Topbar from "./appbar/Topbar";

const Layouts: React.FC<{
  title?: string;
  children: React.ReactNode;
}> = ({ children, title }) => {
  const pageTitle = title || "Federal University of Technology Owerri";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Students complaints resolution using futo as a case study"
        />
        <meta name="theme-color" content="#c1d6b3" />
        <link rel="icon" href="/images/futo_logo_only.png" />
      </Head>
      <Topbar />
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
