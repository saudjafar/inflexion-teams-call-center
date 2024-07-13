import React from 'react'
import '../../styles/LP2/GridElementLP2.scss';
const GridElementLP2 = ({ imgSrc, headline, subtext }) => {
    return (

        <div className='grid-elementt'>
            <img src={imgSrc} width={45} height={45} />
            <div className='grid-text'>
                <span className='grid-headline'>{headline}</span>
                <span className='grid-subtext'>{subtext}</span>
            </div>
        </div>
    )
}

export default GridElementLP2