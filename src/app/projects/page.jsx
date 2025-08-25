'use client'
import HeaderTitle from '@/components/common/HeaderTitle'
import Navbar from '@/components/home-components/Navbar'
import Footer from '@/components/home-components/Footer'
import PortfolioGallery from '../../components/ProjectsComponents/PortfolioGallery'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
     <HeaderTitle title={'Portfolio - Projects - Worksudio - About us -'} /> 
     <PortfolioGallery />
     <Footer />
    </>
  )
}

export default page
