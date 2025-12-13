'use client'

import HeaderTitle from '@/components/common/HeaderTitle'
import PrimeIntroStyled from '@/components/AboutComponents/PrimeIntroSection'
import React from 'react'
import InfiniteCarousel from '@/components/AboutComponents/ImagesCarousel'
import EvolutionSection from '@/components/AboutComponents/EvolutionOfPromeSection'
import JourneySteps from '@/components/AboutComponents/JourneySteps'
// import AwardsSection from '@/components/AboutComponents/AwardsSection'
// import ClientsSection from '@/components/home-components/ClientsSection'
import JobListings from '@/components/AboutComponents/JobListings'
import Navbar from '@/components/home-components/Navbar'
import Footer from '@/components/home-components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <HeaderTitle title={'prime - Interior Design'} />
            <PrimeIntroStyled />
            <InfiniteCarousel />
            <EvolutionSection />
            <JourneySteps />
            {/* <AwardsSection /> */}
            {/* <ClientsSection /> */}
            <JobListings />
            <Footer />
        </>
    )
}

export default page
