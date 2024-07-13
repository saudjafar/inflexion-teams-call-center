import React from 'react'
import '../../styles/LP1/Insights.scss';
import { Card } from 'antd';
import blog1 from '../../assets/imgs/blog1.jpg';
import blog2 from '../../assets/imgs/blog2.png';
import blog3 from '../../assets/imgs/blog3.jpg';
import blog4 from '../../assets/imgs/blog4.jpg';
const Insights = () => {
    const { Meta } = Card;

    const cardData = [
        {
            title: "Company News",
            description: "How this 37-year-old made $400,000 a year",
            image: blog1
        },
        {
            title: "Trends",
            description: "How to save more and reach your financial goals by the end of the year",
            image: blog2
        },
        {
            title: "Trends",
            description: "7 Must Have Tools For Web Designers",
            image: blog3
        },
        {
            title: "Trends",
            description: "3 steps to get your finances back on track",
            image: blog4
        }
    ];
    return (
        <section className='insights-section'>
            <h1 className='header'>Insights</h1>
            <div className="blog-cards-container">
                {cardData.map((card, index) => (
                    <Card

                        key={index}
                        className="blog-card"
                        cover={<img width={303} height={270} alt={card.title} src={card.image} className="custom-card-cover" />}
                    >
                        <Meta
                            title={<div className="custom-card-title">{card.title}</div>}
                            description={<div className="custom-card-description">{card.description}</div>}
                        />
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Insights