"use client";
import HeaderTitle from "@/components/common/HeaderTitle";
import Footer from "@/components/home-components/Footer";
import Navbar from "@/components/home-components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <HeaderTitle title={'Lets - Talk - Work - With - Us - Contact -'} /> */}
      <HeaderTitle title={"Get in Touch with Prime Kitchen"} />
      <Footer />
    </>
  );
};

export default page;
