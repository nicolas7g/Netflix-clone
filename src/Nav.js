import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    //hace que cuando se haga scroll vertical el Nav cambie su fondo a negro
    useEffect(()=>{
        window.addEventListener("scroll",() =>{
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        } );

        return () => {
            console.log('bye')
            window.removeEventListener("scroll",handleShow(false));
        };            
    },[]);    


    return ( //`nav ${show && "nav__black"} --> determina si utiliza las clases nav y nav__black o solo nav
        
        <div className={`nav ${show && "nav__black"}`}>
        <img
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix Logo'/>
        <img
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png'
            alt='Netflix Logo'/>



        </div>
  
  )
}

export default Nav
