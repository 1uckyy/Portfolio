import React, { Component } from 'react';
import { Link } from 'react-scroll';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

//google analytics
import ReactGA from 'react-ga';
//resume pdf
import resume_pdf from '../resume_Novak_Vladislav.pdf';

class Header extends Component {
    render () {
        function ResumeClick() {
            ReactGA.event({
                category: 'Resume',
                action: 'Click resume pdf file'
            })
        }

        return (
            <div className="navWrap" id="aboutme">
                <header className="header">
                <div className="container">
                    <Link activeClass="active" className="nameAuthor" to="aboutme" spy={true} smooth={true} duration={500}>vladislav novak</Link>
                    <div className="menu">
                        <Link activeClass="active" className="menuItem" to="aboutme" spy={true} smooth={true} duration={500}>about me</Link>
                        <Link activeClass="active" className="menuItem" to="projects" spy={true} smooth={true} duration={500}>projects</Link>
                        <Link activeClass="active" className="menuItem" to="footer" spy={true} smooth={true} duration={500}>contacts</Link>
                        <a onClick={ResumeClick} href={resume_pdf} className="menuItem">cv</a>
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