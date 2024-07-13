import React from 'react'
import Header from '../components/Header'
import HeroSectionLP2 from '../components/LP2/HeroSectionLP2'
import LogoSlider from '../components/LP2/LogoSliderLP2'
import Feature1LP2 from '../components/LP2/Feature1LP2'
import Footer from '../components/Footer'
import ServicesLP2 from '../components/LP2/ServicesLP2'
import Feature2LP2 from '../components/LP2/Feature2LP2'
import Feature3LP2 from '../components/LP2/Feature3LP2'

const LP2 = () => {
    return (
        <section className='LP2-section'>
            <Header />
            <HeroSectionLP2 />
            <LogoSlider />
            <Feature1LP2 />
            <ServicesLP2 />
            <Feature2LP2 />
            <Feature3LP2 />
            <Footer />
        </section>

    )
}

export default LP2