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
            "itemImageSrc": "http://172.17.0.1:8080/image/1.jpg",
            "thumbnailImageSrc": "http://172.17.0.1:8080/image/1.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "http://172.17.0.1:8080/image/2.jpg",
            "thumbnailImageSrc": "http://172.17.0.1:8080/image/2.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "http://172.17.0.1:8080/image/3.jpg",
            "thumbnailImageSrc": "http://172.17.0.1:8080/image/3.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "http://172.17.0.1:8080/image/4.jpg",
            "thumbnailImageSrc": "http://172.17.0.1:8080/image/4.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
        ,
        {
            "itemImageSrc": "http://172.17.0.1:8080/image/5.jpg",
            "thumbnailImageSrc": "http://172.17.0.1:8080/image/5.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
    ];

    const itemTemplate = (item) => {
        return <img className="h-96 rounded-lg" src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img className="h-96 rounded-lg" src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="w-full">
            <Galleria value={photoService} numVisible={5} circular className="w-auto" showItemNavigators
                      showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} autoPlay transitionInterval={2000}/>
        </div>
    )
}

export default CustomSlider;