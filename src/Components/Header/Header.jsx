import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header(){
    const [ open , setOpen] = useState (false);

    const handleToggle  = ()=>{
        setOpen(!open);
    };

    return(
        <div className="navigationBar">
            <nav className="navigation">
                <div className="logo">
                    <img src="logo.png"/>
                </div>
                <div className="tabs" >
                    <NavLink to="/" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Home</NavLink>
                    <NavLink to="/ramayan" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Ramayana</NavLink>
                    <NavLink to="/mantras" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Ram Mantras</NavLink>
                    <NavLink to="/places" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Panchavati</NavLink>
                    <NavLink to="/plants" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Botanical Ramayana</NavLink>
                    <NavLink to="/gurudeepika" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Gurukula</NavLink>
                    <NavLink to="/contact" style={({isActive}) => (isActive? {color: 'Sienna'} : {color: 'black'})}>Contact</NavLink>
                </div>   
                <div onClick={handleToggle} className="toggler">
                    <i class="fa-solid fa-xmark" className={open? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            </nav>
            
        </div>
    );
}

export default Header;