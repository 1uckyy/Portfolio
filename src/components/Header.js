import React, { Component } from 'react';
import { Link } from 'react-scroll';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends Component {
    render () {
        return (
            <div className="navWrap" id="aboutme">
                <header className="header">
                <div className="container">
                    <Link activeClass="active" className="nameAuthor" to="aboutme" spy={true} smooth={true} duration={500}>vladislav novak</Link>
                    <div className="menu">
                        <Link activeClass="active" className="menuItem" to="aboutme" spy={true} smooth={true} duration={500}>about me</Link>
                        <Link activeClass="active" className="menuItem" to="projects" spy={true} smooth={true} duration={500}>projects</Link>
                        <Link activeClass="active" className="menuItem" to="footer" spy={true} smooth={true} duration={500}>contacts</Link>
                    </div>
                    <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item><Link activeClass="active" className="menuItem" to="aboutme" spy={true} smooth={true} duration={500}>about me</Link></Dropdown.Item>
                        <Dropdown.Item><Link activeClass="active" className="menuItem" to="projects" spy={true} smooth={true} duration={500}>projects</Link></Dropdown.Item>
                        <Dropdown.Item><Link activeClass="active" className="menuItem" to="footer" spy={true} smooth={true} duration={500}>contacts</Link></Dropdown.Item>
                    </DropdownButton>
                </div>
                </header>
            </div>
        )
    }
}

export default Header;