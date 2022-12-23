import React from "react";

import './Image.scss';

function VerticalImg(props){
    return(
        <div className="Vertical-Image">
            <img 
                src={props.Src} 
                alt={props.Alt}
                 />
        </div>
    );
}
function HorizontalImg(props){
    return(
        <div className="Horizontal-Image">
            <img 
                Src={props.Src} 
                Alt={props.Alt}
            />
        </div>
    );
}

export default function Image(props){
    if(props.Vertical){
        return( 
            <VerticalImg
                Src={props.src}
                Alt={props.alt} 
            />
        );
    }
    if(props.Horizontal){
        return( 
            <HorizontalImg
                Src={props.src}
                Alt={props.alt} 
            />
        );
    }
}