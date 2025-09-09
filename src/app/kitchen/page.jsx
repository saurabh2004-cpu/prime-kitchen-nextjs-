'use client'

import AwardsSection from '@/components/common/AwardsSection'
import BrandLogos from '@/components/common/BrandLogos'
import HeaderTitle from '@/components/common/HeaderTitle'
import KitchenCarousel from '@/components/common/KitchenCarousel'
import KitchenHeroImgAndHeading from '@/components/common/KitchenHeroImgAndHeading'
import LuxuryKitchenImage from '@/components/common/LuxuryKitchenImage'
import LuxuryKitchenLayout from '@/components/common/LuxyryKitchenLayout'
import Footer from '@/components/home-components/Footer'
import Navbar from '@/components/home-components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <HeaderTitle title={'Kitchen - Office-Wardrobetudio - About us -'} />
            <KitchenHeroImgAndHeading />
            <LuxuryKitchenLayout />
            <BrandLogos />
            <LuxuryKitchenImage />
            <KitchenCarousel />
            <AwardsSection />
            <Footer />

        </>
    )
}

export default page
