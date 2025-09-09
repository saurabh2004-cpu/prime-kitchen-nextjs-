'use client'

import AwardsSection from "@/components/home-components/AwardsSection";
import AboutUs from "@/components/home-components/AboutUs";
import ClientsSection from "@/components/home-components/ClientsSection";
import Hero from "@/components/home-components/Hero";
import ImagesGrid from "@/components/home-components/ImagesGridSection";
import Navbar from "@/components/home-components/Navbar";
import NewProjectsSection from "@/components/home-components/NewProjectsSection";
import ProjectsHeader from "@/components/home-components/ProjectsHeader";
import ReviewsCarousel from "@/components/home-components/ReviewsCarousel";
import ReviewsHeader from "@/components/home-components/ReviewsHeader";
import ServicesGrid from "@/components/home-components/ServicesGrid";
import ServicesHeader from "@/components/home-components/ServicesHeader";
import SpecialitiesSection from "@/components/home-components/SpecialitiesSection";
import Footer from "@/components/home-components/Footer";
import { useState } from "react";
import ProjectShowcase from "@/components/home-components/ProjectsShowcase";

export default function Home() {
  const [navItem, setNavItem] = useState("");
  return (
    <>
      <Navbar setNavItem={setNavItem} />
      <Hero />
      <AboutUs />
      <ProjectsHeader />
      <NewProjectsSection />
      <div id="Services">
        <ServicesHeader />
        <ServicesGrid />
      </div>
      <ImagesGrid />
      <ReviewsHeader />
      <ReviewsCarousel />
      <AwardsSection />
      <ClientsSection />
      <SpecialitiesSection />
      <Footer />d
    </>
  );
}
