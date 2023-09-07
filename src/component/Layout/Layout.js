import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, auther }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={auther} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "81vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "E-shop",
  description: "E-shop Description",
  keywords: "E-shop Keywords",
  auther: "White Pixelz Pvt Ltd",
};

export default Layout;
