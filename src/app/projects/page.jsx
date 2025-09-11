'use client'
import HeaderTitle from '@/components/common/HeaderTitle'
import Navbar from '@/components/home-components/Navbar'
import Footer from '@/components/home-components/Footer'
import PortfolioGallery from '../../components/ProjectsComponents/PortfolioGallery'
import React from 'react'
import ProjectHeaderAndImage from '@/components/projects-details-components/ProjectHeaderAndImage'

const page = () => {
  return (
    <>
      <Navbar />
      <HeaderTitle title={'Portfolio - Projects - Worksudio - About us -'} />
      <PortfolioGallery />
      <ProjectHeaderAndImage />
      <Footer />
    </>
  )
}

export default page
