import React, { useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Image from "../Image/Image";

import './Slider.scss';

export default function Slider(){
    // Data from backend
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
    const startConfiguration = {
        timmer: 5000,
        autoplay: false,
        controls: true,
    }
    // ------ end Data ----
    
    const drive = 'http://drive.google.com/uc?export=view&id=';
    const sizeList = imgData.length;
    const sliderWrap = useRef(null);
    const intervalFunction = useRef(null);
    const velocidad = 0.3;

    // Funcion que detecta el tamnio del primer elemento
    const getWidthOfElement = (element) => {
        return element.offsetWidth;
    }
    
    // Funcion para moverte a la siguiente imagen
    const moveNext = useCallback(() => {
        if(sliderWrap.current.children.length > 5){
            const firstElement = sliderWrap.current.children[0];
            
            sliderWrap.current.style.transition = `${velocidad}s ease all`;
            sliderWrap.current.style.translate = `-${getWidthOfElement(firstElement) + 40}px`;
            
            const detectFinishTransition = () => {
                sliderWrap.current.style.transition = `none`;
                sliderWrap.current.style.translate = `0`;

                sliderWrap.current.appendChild(firstElement);
                sliderWrap.current.removeEventListener('transitionend', detectFinishTransition)
            }
            sliderWrap.current.addEventListener('transitionend', detectFinishTransition);
        }
    }, [velocidad])
    // Funcion para moverte una imagen atras
    const movePrev = () => {
        if(sliderWrap.current.children.length > 5){
            const lastElement = sliderWrap.current.children[sizeList - 1];

            sliderWrap.current.insertBefore(lastElement, sliderWrap.current.firstChild);

            sliderWrap.current.style.transition = 'none';
			sliderWrap.current.style.transform = `translateX(-${getWidthOfElement(lastElement)}px)`;
		
			setTimeout(() => {
				sliderWrap.current.style.transition = `${velocidad}s ease-out all`;
				sliderWrap.current.style.transform = `translateX(0)`;
			}, 30);
        }
    }
    // Hook para dectactar, parar o repoducir el autoplay
    useEffect( () => {
        if(startConfiguration.autoplay){
            intervalFunction.current = setInterval(() => {
				moveNext();
			}, startConfiguration.timmer);
	
			sliderWrap.current.addEventListener('mouseenter', () => {
				clearInterval(intervalFunction.current);
			});
	
			sliderWrap.current.addEventListener('mouseleave', () => {
				intervalFunction.current = setInterval(() => {
					moveNext();
				}, startConfiguration.timmer);
			});
        }
    }, [startConfiguration.autoplay, startConfiguration.timmer, moveNext]) 

    return(
        <section className="Slider">
            <div className="Slider__Wrapper">
                {startConfiguration.controls && 
                    <div 
                        className="Control Control--Left"
                        onClick={movePrev}
                    >
                        <FontAwesomeIcon 
                            icon={faChevronLeft} 
                            className='Control__Icon'
                        />
                    </div>
                }
                <div className="Slides-container">
                    <div 
                        ref={sliderWrap}
                        className="Slides-Wrap"
                    >
                    {imgData.map( (img, index) => {
                        return(
                            <div 
                                key={index}
                                className='Slide'>
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
                {startConfiguration.controls && 
                    <div 
                        className="Control Control--Right"
                        onClick={moveNext}
                    >
                        <FontAwesomeIcon 
                            icon={faChevronRight} 
                            className='Control__Icon'
                        />
                    </div>
                }
            </div>
        </section>
    );
}