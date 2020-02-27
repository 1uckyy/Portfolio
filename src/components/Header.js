import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <div className="navWrap" id="aboutme">
                <header className="header">
                <div className="container">
                    <a className="nameAuthor" href="#aboutme">vladislav novak</a>
                    <div className="menu">
                        <a className="menuItem" href="#aboutme">about me</a>
                        <a className="menuItem" href="#projects">projects</a>
                        <a className="menuItem" href="#footer">contacts</a>
                    </div>
                </div>
                </header>
            </div>
        )
    }
}

export default Header;