import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faAddressCard} from '@fortawesome/free-solid-svg-icons'


function NavBar(){
    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">SSForum</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-white" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome}/> Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faAddressCard}/> About</a>
                    </li>
                
                    </ul>
                </div>
                </nav> 
        </div>
    )
}

export default NavBar