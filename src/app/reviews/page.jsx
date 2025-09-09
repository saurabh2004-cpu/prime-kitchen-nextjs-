'use client'
import HeaderTitle from '@/components/common/HeaderTitle'
import Footer from '@/components/home-components/Footer'
import Navbar from '@/components/home-components/Navbar'
import Reviews from '@/components/reviews-components/Reviewscards'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HeaderTitle title={'Testimonials - Reviews- News Studio - About us -'} />
      <Reviews />
      <Footer />
    </>
  )
}

export default page
