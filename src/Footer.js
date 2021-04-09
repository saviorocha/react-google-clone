import React from 'react'

//style={{ backgroundColor: rgbrgba(0, 0, 0, 0.2)}}
const Footer = () => {
    return (
        <div classNameName="container">
            <nav className="navbar fixed-bottom navbar-expand-lg navbar-light   justify-content-end" style={{ backgroundColor: "#f2f2f2" }}>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Publicidade</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Negócios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Como funciona a pesquisa</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link" href="#">Privacidade</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Termos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Configurações</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default Footer 