import React from 'react'
import '../styles/HowItWorks/HowItWorks.scss'
import HeaderLP3 from '../components/LP3/HeaderLP3'
import FooterLP3 from '../components/LP3/FooterLP3'
import Feature7LP3 from '../components/LP3/Feature7LP3'
import Feature8LP3 from '../components/LP3/Feature8LP3'

import dotsSVG from '../assets/svgs/216.light.svg'
import { Button } from 'antd';
import heroImg from '../assets/imgs/how-it-works-hero.png'
import LogoSliderLP3 from '../components/LP3/LogoSliderLP3';
import gridSVG from '../assets/svgs/LP3-grid.svg'
import scalableTeamsL from '../assets/svgs/scalable-teams-l.svg';
import scalableTeamsR from '../assets/svgs/scalable-teams-r.svg';
import FaqClpsPanel from '../components/FaqClpsPanel'
import OurProcessScrollMenu from '../components/OurProcessScrollMenu'
const HowItWorks = () => {
    return (
        <div style={{ background: '#030303' }}>
            <HeaderLP3 />
            <section className='how-it-works-section'>
                <section className='hero-how-it-works-section'>
                    <div className='hero-how-it-works'>
                        <img src={dotsSVG} style={{ position: 'absolute', top: '-12rem', zIndex: '1' }} />
                        <div className='left'>
                            <span className='pre-header'>
                                HOW WE WORK
                            </span>
                            <h1 className='header'>
                                Global Talent with AI Superpowers
                            </h1>
                            <span className='sub-headline'>
                                Inflexion Teams leverages cutting-edge AI technology and extensively trained agents to provide exceptional customer service solutions, acting as a seamless extension of your company's support team.
                            </span>

                            <Button className='get-started-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>Get Started</Button>

                        </div>
                        <div className='right'>
                            {/* <HeroSlider /> */}
                            <img src={heroImg} />
                        </div>
                    </div>

                    <h1 className='carousel-header'>We’ve hired talent from</h1>

                    <LogoSliderLP3 />

                    <div className='how-it-works-gridImg-container'>
                        <img src={gridSVG} />
                    </div>

                </section>
            </section>

            <section className='scalable-teams-section'>
                <div className='scalable-teams'>
                    <div className='header-container'>
                        <img className='img-l' src={scalableTeamsL} />
                        <img className='img-r' src={scalableTeamsR} />
                        <span className='pre-header'>
                            SCALABLE TEAMS
                        </span>
                        <h1 className='header'>
                            What are Fractional CX Teams?
                        </h1>
                        <p className='sub-header'>
                            Fractional CX teams are flexible customer service resources that can scale with your business needs. As your customer support requirements change, our teams can adapt quickly. With extensive training and AI-powered tools, these professionals are able to handle complex customer inquiries with unprecedented efficiency and accuracy.
                        </p>
                    </div>
                    <div className='scalable-teams-cards-container'>


                        <div className='card card-left'>
                            <span className='pre-header'>
                                SHARED AGENTS
                            </span>
                            <h2 className='header'>
                                On-Demand, AI-Empowered Support
                            </h2>
                            <p className='sub-text'>
                                A pool of highly trained customer service agents, equipped with our proprietary AI tools, provides flexible support across multiple clients. These agents are ideal for businesses with fluctuating support needs or those looking to scale their customer service operations cost-effectively.
                            </p>
                        </div>

                        <div className='card card-right'>
                            <span className='pre-header'>
                                DEDICATED AGENTS
                            </span>
                            <h2 className='header'>
                                Exclusive, Brand-<br />Aligned Teams
                            </h2>
                            <p className='sub-text'>
                                We build and manage a team of customer service agents exclusively dedicated to your brand. These agents become an extension of your company, deeply understanding your products, services, and company culture to provide a seamless customer experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-process-section'>
                <img src={dotsSVG} className='dots-l' />
                <img src={dotsSVG} className='dots-r' />
                <div className='process-container'>
                    <div className='header-container'>

                        <h1 className='header'>
                            Here's Our Process:
                        </h1>
                        <p className='sub-text'>
                            Hire an end-to-end CX team in weeks (not months).
                        </p>
                    </div>

                    <div className='scroll-menu-container'>
                        <OurProcessScrollMenu />
                    </div>

                </div>
            </section>

            <section className='faqs-section'>
                <div className='faqs-container'>
                    <div className='header-container'>
                        <span className='pre-header'>
                            FAQ’s
                        </span>
                        <h1 className='header'>
                            Frequently Asked questions
                        </h1>
                    </div>
                    <div className='faqs-collapse-container'>
                        <FaqClpsPanel />
                    </div>
                </div>
            </section>

            <Feature7LP3 />
            <Feature8LP3 />
            <FooterLP3 />
        </div>
    )
}

export default HowItWorks