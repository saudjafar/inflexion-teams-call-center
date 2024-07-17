import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>List of URLs</h1>
            <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                <li><Link to="/lp1" style={{ textDecoration: 'none', color: '#007bff' }}>LP1</Link></li>
                <li><Link to="/lp2" style={{ textDecoration: 'none', color: '#007bff' }}>LP2</Link></li>
                <li><Link to="/lp3" style={{ textDecoration: 'none', color: '#007bff' }}>LP3</Link></li>

                <li><Link to="/customer-support" style={{ textDecoration: 'none', color: '#007bff' }}>Customer Support</Link></li>
                <li><Link to="/technical-support" style={{ textDecoration: 'none', color: '#007bff' }}>Technical Support</Link></li>
                <li><Link to="/data-management" style={{ textDecoration: 'none', color: '#007bff' }}>Data Management</Link></li>
                <li><Link to="/content-moderation" style={{ textDecoration: 'none', color: '#007bff' }}>Content Moderation</Link></li>
                <li><Link to="/back-office" style={{ textDecoration: 'none', color: '#007bff' }}>Back Office</Link></li>
                <li><Link to="/how-it-works" style={{ textDecoration: 'none', color: '#007bff' }}>How it Works</Link></li>

            </ol>
        </div>
    );
}

export default HomePage;
