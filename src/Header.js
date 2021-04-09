import React from 'react'

import './header.css'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light justify-content-end">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link link" href="#">Gmail</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link" href="#">Imagens</a>
                    </li>
                </ul>
            </div>
            <nav className="navbar navbar-light ">
                <div className="hover-circle">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-th" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="hover-circle">
                    <a className="navbar-brand" href="#">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F558016134012624896%2FKdKrx0oC.jpeg&f=1&nofb=1" alt="" id="profile-pic" />
                    </a>
                </div>
            </nav>
        </nav>


    );
}

export default Header 