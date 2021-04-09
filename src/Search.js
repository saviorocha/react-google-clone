import React from 'react'
import './search.css'
const Search = () => {
    return (
        <div className="container">
            <div className="col-lg-12">
                <div id="content">
                    <img src="https://pluspng.com/img-png/google-logo-png-google-logo-png-3478.png" alt="logo-google" id="logo" className="mx-auto mb-2" />
                    <div className="form-outline input-icons mx-auto ">
                        <input type="search" id="search-bar" className="form-control input-field" type="text" />
                        <i className="fa fa-search icon"></i>
                        <i className="fa fa-keyboard icon"></i>
                    </div>
                    <button className="btn btn-light btn-sm mt-5 m-2">Pesquisa Google</button>
                    <button className="btn btn-light btn-sm mt-5 m-2">Estou com sorte</button>
                    <p className="mt-3">Disponibilizado pelo Google em: <a href="https://www.google.com/setprefs?sig=0_BTzrs4HHHxWC7sisOfvan__dtls%3D&hl=en&source=homepage&sa=X&ved=0ahUKEwi_pNu_ifHvAhXRJrkGHcdUBDcQ2ZgBCA4">English</a></p>
                </div>
            </div>
        </div>
    );
}

export default Search 