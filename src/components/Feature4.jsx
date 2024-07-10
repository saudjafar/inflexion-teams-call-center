import React from 'react'

const Feature4 = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        console.log('Email submitted:', email);
    };
    return (
        <section className='feature-4-section'>
            <div className='feature-4'>
                <div style={{ display: 'flex', gap: '3.25rem', flexDirection: 'column' }}>
                    <h1 className='header'>Save 70% on Support Costs</h1>
                    <form onSubmit={handleSubmit} className="email-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="email-input"
                        />
                        <button type="submit" className="submit-button">Get Started</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Feature4