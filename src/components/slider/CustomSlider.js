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
            "itemImageSrc": "https://tehcfu.com/Images/63601783-12b1-4d1d-887b-a325afe9e4cf.jpg",
            "thumbnailImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <Galleria value={photoService} numVisible={5} circular style={{ maxWidth: '640px' }} showItemNavigators
                      showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} autoPlay transitionInterval={2000}/>
        </div>
    )
}

export default CustomSlider;