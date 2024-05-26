import React from 'react';
import {RxHamburgerMenu} from 'react-icons/rx'

export default function Header(){
    return (
        <header>
            <button className='menu-button'><RxHamburgerMenu/></button>
        </header>
    )
}