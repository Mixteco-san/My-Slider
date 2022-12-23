import React from "react";

import Image from "../Image/Image";

import './Slider.scss';

export default function Slider(){
    const drive = 'http://drive.google.com/uc?export=view&id=';
    const imgData = [
        {
            url: '1rlNm5YlGWDtvQXFd58FV-yLZaTC_CWrc',
            name: 'logo 1'
        },
        {
            url: '1lj1o9ogPmlxtanLwKYWDZe34CuB0VNc-',
            name: 'logo 2'
        },
        {
            url: '1GETpMy2C2BlLiRjS5PHnb25cuZwA6dUG',
            name: 'logo 3'
        },
        {
            url: '13FQIxLENkcdDEcokLa4talJwIwgYjvvv',
            name: 'logo 4'
        },
        {
            url: '16GIrLm0ZixjTreVkt8woFEF9LiLCFNDK',
            name: 'logo 5'
        },
        {
            url: '1Jdz_hLk0LrWgT8SUQ9OuO1s4FuVCvakt',
            name: 'logo 6'
        },
        {
            url: '1f0x2iAA4IWr250F2GzJHS6krPhG0nBTB',
            name: 'logo 7'
        },
        {
            url: '1UFI48LsC7NFGCEB-lQtOul1BupIJP-WG',
            name: 'logo 8'
        }
    ]

    return(
        <section className="Slider">
            <div className="Slider__Wrapper">
                <div className="Control">
                    <p>
                        Icon
                    </p>
                </div>
                <div className="Slides-container">
                    <div className="Slides-Wrap">
                    {imgData.map( (img, index) => {
                        return(
                            <div 
                                key={index}
                                className={`Slide-Img ${index === 2 ? 'Slide-Img--main' : 'Slide-Img--simple'}`}>
                                <Image
                                    src={drive + img.url}
                                    alt={img.name} 
                                    Vertical={true}
                                />
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="Control">
                    <p>
                        Icon
                    </p>
                </div>
            </div>
        </section>
    );
}