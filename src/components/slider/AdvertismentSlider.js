"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
const AdvertismentSlider = () =>{
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const photoService = [
        {
            "itemImageSrc": "/image/pic/banner.jpg",
            "thumbnailImageSrc": "/image/pic/banner.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }

    ];
    const itemTemplate = (item) => {
        return <img className="w-[1200px]  rounded-lg" src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }
    //        h-[214px]
    const thumbnailTemplate = (item) => {
        return <img className="w-[1170px]  rounded-lg" src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
//h-[209px]
    return (
        <div className="w-full ">
            <Galleria value={photoService} numVisible={5} circular className="w-auto"
                      showThumbnails={false} item={itemTemplate} showIndicators autoPlay transitionInterval={2000}/>
        </div>
    )
}
export default AdvertismentSlider;
