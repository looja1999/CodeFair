import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import TabToTop from "../tab-to-top/tab-to-top";
import { useRouter } from "next/router";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar"
import Head from "next/head";

const Contentlayout = ({ children }) => {
  let Router = useRouter();
  const Add = () => {
    document.querySelector("body").classList.remove("error-1");
    document
      .querySelector("body")
      .classList.remove(
        "app",
        "sidebar-mini",
        "ltr",
        "landing-page",
        "horizontalmenu"
      );
    document.querySelector("body").classList.add("main-body", "leftmenu");
    document.body.classList.add("ltr", "main-body", "leftmenu");
  };
  useEffect(() => {
    Add();

    
  });

  

  
  return (
    <>
      {/* <Head>
        <body className="ltr main-body leftmenu"></body>
        </Head> */}
        <div className="horizontalMenucontainer">
          <div className="page">
            <Header />
            <Sidebar />
            <div className="main-content side-content pt-0">
              <div
                className="main-container container-fluid"
                onClick={() => remove()}
              >
                <div className="inner-body">{children}</div>
              </div>
            </div>
          </div>
          <TabToTop />
          <Footer />
        </div>
    </>
  );
};

export default Contentlayout;
