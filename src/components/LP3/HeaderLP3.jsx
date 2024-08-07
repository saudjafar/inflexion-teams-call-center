import React, { useState } from 'react'
import '../../styles/LP3/HeaderLP3.scss';
import inflexionLogoLP3 from '../../assets/svgs/inflexion-logo-LP3.svg';
import { Button, Drawer } from 'antd';
import { useModal } from '../../contexts/ModalContext';
import { MenuOutlined } from '@ant-design/icons';
import burgerMenuIcon from '../../assets/svgs/burger-menu-icon.svg'
const HeaderLP3 = () => {
    const { showModal } = useModal();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <section className='header-LP3-container'>
            <div className='header-LP3'>
                <img src={inflexionLogoLP3} alt='inflexion-logo' />
                <Button className='quote-cta' onClick={showModal}>Get a Quote</Button>
                <div className='mobile-hamburger-container'>

                    <img src={burgerMenuIcon} onClick={showDrawer} />
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={closeDrawer}
                        open={drawerVisible}
                        className='hamburger-drawer'
                    >
                        <div className='mobile-navbar-container'>
                            <span className='navbar-item' onClick={closeDrawer}>Features</span>
                            <span className='navbar-item' onClick={closeDrawer}>How it works</span>
                            <span className='navbar-item' onClick={closeDrawer}>Blog</span>
                        </div>
                    </Drawer>

                </div>
            </div>
            <div className='desktop-navbar-container'>
                <span className='navbar-item'>Features</span>
                <span className='navbar-item'>How it works</span>
                <span className='navbar-item'>Blog</span>
            </div>

        </section>
    )
}

export default HeaderLP3