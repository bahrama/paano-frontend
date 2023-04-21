"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
const CustomSlider = () =>{
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
            "itemImageSrc": "https://www.tehranch.com/image/1.jpg",
            "thumbnailImageSrc": "https://www.tehranch.com/image/1.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "https://www.tehranch.com/image/2.jpg",
            "thumbnailImageSrc": "https://www.tehranch.com/image/2.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "https://www.tehranch.com/image/3.jpg",
            "thumbnailImageSrc": "https://www.tehranch.com/image/3.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "https://www.tehranch.com/image/4.jpg",
            "thumbnailImageSrc": "https://www.tehranch.com/image/4.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
        ,
        {
            "itemImageSrc": "https://www.tehranch.com/image/5.jpg",
            "thumbnailImageSrc": "https://www.tehranch.com/image/5.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
    ];

    const itemTemplate = (item) => {
        return <img className="w-full h-[300px] sm:h-[500px] md:h-[500px] rounded-lg" src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img className="w-full h-[300px] sm:h-[500px] md:h-[500px] rounded-lg" src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="w-full ">
            <Galleria value={photoService} numVisible={5} circular className="w-auto" showItemNavigators
                      showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} autoPlay transitionInterval={2000}/>
        </div>
        /*
        * test amir 2
        * */
    )
}

export default CustomSlider;

/*changes from ali*/