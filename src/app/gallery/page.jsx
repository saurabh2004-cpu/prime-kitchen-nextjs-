"use client";
import HeaderTitle from "@/components/common/HeaderTitle";
import TabbedGallery from "@/components/gallery-components/ImageAndVideoGAllery";
import Footer from "@/components/home-components/Footer";
import Navbar from "@/components/home-components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <HeaderTitle title={'Portfolio - Showcase -Inspiration - About us -'} /> */}
      <TabbedGallery />
      <Footer />
    </>
  );
};

export default page;
