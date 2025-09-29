'use client'
import FAQSection from '@/components/home-components/FAQSection'
import Footer from '@/components/home-components/Footer'
import LuxuryWardrobeAbout from '@/components/services-components/About'
import DesignFunctionBlendSection from '@/components/services-components/DesignAndBlendSection'
import FAQ from '@/components/services-components/FAQ'
import WardrobeGallerySection from '@/components/services-components/GallerySection'
import ClosetHeroSection from '@/components/services-components/HeroSection'
import LuxuryGallerySection from '@/components/services-components/LuxuryGallerySection'
import TestimonialsCarousel from '@/components/services-components/TestimonialsCarousel'
import React from 'react'

const page = () => {

  const aboutLuxuryKitchenImg = '/images/service-about-1.png'

  const wardrobeImages = [
    {
      id: 1,
      src: "/images/services-gallery-1.png",
      alt: "Modern luxury wardrobe with organized storage and LED lighting"
    },
    {
      id: 2,
      src: "/images/services-gallery-2.png",
      alt: "Contemporary walk-in closet with premium finishes"
    },
    {
      id: 3,
      src: "/images/services-gallery-3.png",
      alt: "Elegant wardrobe interior with mirror and organized compartments"
    },
    {
      id: 4,
      src: "/images/services-gallery-4.png",
      alt: "Premium wardrobe with hanging clothes and sophisticated lighting"
    }
  ];

  const blendImages = [
    {
      id: 1,
      src: "/images/services-blend-1.png",
      alt: "Modern wardrobe with organized white clothing and smart storage compartments",
    },
    {
      id: 2,
      src: "/images/services-blend-2.png",
      alt: "Luxury walk-in closet with warm LED lighting and premium finishes",
    },
    {
      id: 3,
      src: "/images/services-blend-3.png",
      alt: "Luxury walk-in closet with warm LED lighting and premium finishes",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/images/services-luxury-gallery-1.png",
      alt: "Modern luxury wardrobe with organized white clothing and LED strip lighting"
    },
    {
      id: 2,
      src: "/images/services-luxury-gallery-2.png",
      alt: "Walk-in closet with warm wood tones and central seating ottoman"
    },
    {
      id: 3,
      src: "/images/services-luxury-gallery-3.png",
      alt: "Contemporary wardrobe with glass fronts and sophisticated storage solutions"
    }
  ];

  const faqImage = '/images/services-faq-img.png'

  return (
    <>
      <ClosetHeroSection />
      <LuxuryWardrobeAbout image={aboutLuxuryKitchenImg} />
      <WardrobeGallerySection wardrobeImages={wardrobeImages} />
      <DesignFunctionBlendSection blendImages={blendImages} />
      <LuxuryGallerySection galleryImages={galleryImages} />
      <TestimonialsCarousel />
      <FAQ faqImage={faqImage} />
      <Footer />
    </>
  )
}

export default page
