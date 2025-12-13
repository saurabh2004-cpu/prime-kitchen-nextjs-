"use client";
import FAQSection from "@/components/home-components/FAQSection";
import Footer from "@/components/home-components/Footer";
import Navbar from "@/components/home-components/Navbar";
import LuxuryWardrobeAbout from "@/components/services-components/About";
import DesignFunctionBlendSection from "@/components/services-components/DesignAndBlendSection";
import FAQ from "@/components/services-components/FAQ";
import WardrobeGallerySection from "@/components/services-components/GallerySection";
import ClosetHeroSection from "@/components/services-components/HeroSection";
import LuxuryGallerySection from "@/components/services-components/LuxuryGallerySection";
import TestimonialsCarousel from "@/components/services-components/TestimonialsCarousel";
import React from "react";

const page = () => {
  const wardrobeImages = [
    {
      id: 1,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240220_133630150.jpg`,
      alt: "Modern luxury wardrobe with organized storage and LED lighting",
    },
    {
      id: 2,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20250719_104942407.jpg`,
      alt: "Contemporary walk-in closet with premium finishes",
    },
    {
      id: 3,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/WhatsApp-Image-5.jpeg`,
      alt: "Elegant wardrobe interior with mirror and organized compartments",
    },
    {
      id: 4,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240322_135159544.jpg`,
      alt: "Premium wardrobe with hanging clothes and sophisticated lighting",
    },
  ];

  const blendImages = [
    {
      id: 1,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/WhatsApp-Image-3.jpeg`,
      alt: "Modern wardrobe with organized white clothing and smart storage compartments",
    },
    {
      id: 2,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20250719_105036289.jpg`,
      alt: "Luxury walk-in closet with warm LED lighting and premium finishes",
    },
    {
      id: 3,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240322_133132884.jpg`,
      alt: "Luxury walk-in closet with warm LED lighting and premium finishes",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20231228_135237449.jpg`,
      alt: "Modern luxury wardrobe with organized white clothing and LED strip lighting",
    },
    {
      id: 2,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240322_133833407.jpg`,
      alt: "Walk-in closet with warm wood tones and central seating ottoman",
    },
    {
      id: 3,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240322_134538562.jpg`,
      alt: "Contemporary wardrobe with glass fronts and sophisticated storage solutions",
    },
  ];

  const faqImage = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240220_130937450~2.jpg`;

  return (
    <>
      <Navbar />
      <ClosetHeroSection />
      <LuxuryWardrobeAbout />
      <WardrobeGallerySection wardrobeImages={wardrobeImages} />
      <DesignFunctionBlendSection blendImages={blendImages} />
      <LuxuryGallerySection galleryImages={galleryImages} />
      <TestimonialsCarousel />
      <FAQ faqImage={faqImage} />
      <Footer />
    </>
  );
};

export default page;
