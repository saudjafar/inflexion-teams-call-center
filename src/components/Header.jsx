import React from 'react'
import { Dropdown, Menu } from 'antd'
import DownArrow from '../assets/svgs/down-arrow.svg'

import '../styles/Header.scss'
import inflexionLogo from '../assets/svgs/inflexion-header-logo.svg'
const Header = () => {

    const navBarItems = ['Service', 'The Process', 'Pricing', 'Resources', 'About'];
    const menuItems = [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
        { key: '3', label: 'Option 3' },
    ];


    return (
        <section className='header-section'>
            <div className='header-container'>
                <div className='left'>
                    <div className='logo-container'>
                        <img className='logo-img' src={inflexionLogo} alt='Inflexion logo' />
                        <span className='logo-text'>Inflexion Teams</span>
                    </div>
                    <div className='desktop-navbar-container' style={{ display: 'flex', gap: '2.5rem' }}>
                        {navBarItems.map(item => (
                            <Dropdown key={item} overlay={<Menu items={menuItems} />}>
                                <span style={{ background: 'none', border: 'none', display: 'flex', gap: '0.75rem', cursor: 'pointer' }}>
                                    {item} {(item !== 'About' && item !== 'Pricing') && <img src={DownArrow} alt='down-arrow' />}
                                </span>
                            </Dropdown>
                        ))}
                    </div>
                </div>
                <div className='right'>
                    <button className='lets-talk-cta'>
                        Let's Talk
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header