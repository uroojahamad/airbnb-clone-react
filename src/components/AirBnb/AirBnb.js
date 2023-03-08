import React from 'react';
import '../../css/airbnb.css'
import Header from './Header'
import ImageGridText from './ImageGridText';
import AirbnbCard from './AirbnbCard';
import cardData from './AirbnbCardDetails';

const AirBnb = () => {
    return (
        <>
            <Header />
            <ImageGridText />
            <div className='airbnb-card-container'>
                {
                    cardData.map((data) => {
                        return <AirbnbCard
                            key={data.id}
                            img={data.coverImg}
                            rating={data.stats.rating}
                            reviewCount={data.stats.reviewCount}
                            location={data.location}
                            title={data.title}
                            price={data.price}
                            openSpots={data.openSpots}
                        />
                    })
                }
            </div>
        </>
    )
}

export default AirBnb;