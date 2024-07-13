import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/LP1/HeroSection'
import Feature1 from '../components/LP1/Feature1'
import Testimonials from '../components/LP1/Testimonials'
import Services from '../components/LP1/Services'
import Feature2 from '../components/LP1/Feature2'
import Feature3 from '../components/LP1/Feature3'
import Insights from '../components/LP1/Insights'
import Feature4 from '../components/LP1/Feature4'
import Footer from '../components/Footer'

const LP1 = () => {
    return (
        <section className='LP1-section'>
            <Header />
            <HeroSection />
            <Feature1 />
            <Testimonials />
            <Services />
            <Feature2 />
            <Feature3 />
            <Insights />
            <Feature4 />
            <Footer />
        </section>
    )
}

export default LP1