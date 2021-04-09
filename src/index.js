import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Search from './Search.js'


function Google() {
  return (
    <>
      <Header />
      <Search />
      <Footer />
    </>
  );
}

ReactDOM.render(<Google />, document.getElementById('root'))
