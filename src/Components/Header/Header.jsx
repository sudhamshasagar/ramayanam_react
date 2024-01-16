import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {

    const [ isOpen, setIsOpen] = useState(false);

    function showNavBar(){
        setIsOpen(!isOpen);
    }
    return(
        <div className="navigation" style={{width: isOpen? '30%': '100vw', backgroundColor: isOpen? 'rgba(251, 252, 253, 0.95)': 'white', boxShadow: isOpen? '2px 0px 5px rgba(0, 0, 0, 0.2)':'none', height: isOpen? '100%': '5vh'}}>
            <div className="icon">
                {isOpen ? (
                        <i className="fa-solid fa-close" onClick={showNavBar}></i>
                    ) : (
                        <i className="fa-solid fa-bars" onClick={showNavBar}></i>
                )}
                <img src = './Images/logo.png'/>
            </div>
            <div className="tabs" style={{display: isOpen? 'flex': 'none'}}>
                    <NavLink to="/" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Home</NavLink>
                    <NavLink to="/ramayan" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Ramayana</NavLink>
                    <NavLink to="/mantras" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Ram Mantras</NavLink>
                    <NavLink to="/places" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Panchavati</NavLink>
                    <NavLink to="/plants" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Botanical Ramayana</NavLink>
                    <NavLink to="/gurudeepika" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Gurukula</NavLink>
                    <NavLink to="/contact" style={({isActive}) => (isActive? {color: 'red'} : {color: 'black'})}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Header;
