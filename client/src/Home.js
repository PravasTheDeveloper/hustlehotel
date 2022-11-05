import React from 'react'

import Homepage from './HomePageContent/HomePage';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import ServicesSection from './ServicesSection/ServicesSection';
import ConnectWithUs from './ConnectWithUs/ConnectWithUs';
import ContactDirectly from './ContactDirectly/ContactDirectly';
import FooterPenel from './FooterPenel/FooterPenel';
import BestHotels from './BestHotels/BestHotels';

function Home() {
    return (
        <>
            <Homepage />
            <BestHotels />
            <ServicesSection />
            <ConnectWithUs />
            <ContactDirectly />
            <FooterPenel />
        </>
    )
}

export default Home