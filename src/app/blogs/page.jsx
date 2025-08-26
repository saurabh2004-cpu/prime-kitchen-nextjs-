'use client'
import FeaturedBlogs from '@/components/blogs-components/Cards'
import HeaderTitle from '@/components/common/HeaderTitle'
import Footer from '@/components/home-components/Footer'
import Navbar from '@/components/home-components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HeaderTitle title={'Articles - Blogs - News Studio - About us -'} />
      <FeaturedBlogs />
      {/* <TipsAndTricks /> */}
      {/* <NewsAndUpdated /> */}
      {/* <ArticlesAndAnalysis /> */}
      <Footer />
    </>
  )
}

export default page
