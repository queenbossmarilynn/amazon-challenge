import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img 
                className = "header__logo" 
                src="./media/amazonLogo.png"
            />
            
            <div className="header__search">
                <input className="header__searchInput"
                    type="text" />
                    {/*Logo*/}
            </div>
            
        </div>
    )
}

export default Header
