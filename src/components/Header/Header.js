import React from "react";

import './Header.scss';

function Header(){
    return(
        <header className="Header">
            <div className="Header__Wrapper">
                <h1>
                    Slider
                </h1>
                <p>
                    Una descripcion
                </p>
            </div>
        </header>
    );
}

export default Header