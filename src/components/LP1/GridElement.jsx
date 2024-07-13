import React from 'react'
import '../../styles/LP1/GridElement.scss';
const GridElement = ({ imgSrc, headline, subtext, isLast = false }) => {
    return (
        !isLast ? (
            <div className='grid-elementt'>
                <img src={imgSrc} width={45} height={45} />
                <div className='grid-text'>
                    <span className='grid-headline'>{headline}</span>
                    <span className='grid-subtext'>{subtext}</span>
                </div>
            </div>
        ) : (
            <div className='grid-elementt-last'>
                <img src={imgSrc} width={45} height={45} />
                <div className='grid-text'>
                    <span className='grid-headline'>{headline}</span>
                    <button className='lets-talk-cta'>
                        Let's Talk
                    </button>
                </div>
            </div>
        )


    )
}

export default GridElement