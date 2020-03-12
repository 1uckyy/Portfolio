import React, { Component } from 'react';
import LinkItem from './LinkItem';

//google analytics functions
import { LinkedinClick, VkClick, GithubProfileClick, EmailClick, PhoneClick } from './ClickEventFunctions'

/*images*/
import github from '../images/icons/github-icon.png';
import vk from '../images/icons/vk-icon.png';
import linkedin from '../images/icons/linkedin-icon.png';

class Footer extends Component {
    render () {
        return (
            <footer className="footer" id="footer">
                <div className="container centered">
                    <div className="row row-mod">
                        <div className="col-lg-4 mod">
                        <h4 id="h4">Contact:</h4>
                        <p className="footer-links">
                            Email:
                            <a onClick={EmailClick} href="mailto:novak.vlad97@mail.ru" className="footer-link">novak.vlad97@mail.ru</a>
                        </p>
                        <p className="footer-links">
                            Phone:
                            <a onClick={PhoneClick} href="tel:89806550836" className="footer-link">89806550836</a>
                        </p>
                        </div>
                        <div className="col-lg-4 mod">
                        <h4 id="h4">Meet me on:</h4>
                        <p>
                            <LinkItem onClick={LinkedinClick} href="https://www.linkedin.com/in/vladislav-novak-5755621a4/" icon={linkedin} wnd="_blank" alt="linkedin"/>
                            <LinkItem onClick={VkClick} href="https://vk.com/1uckyy" icon={vk} wnd="_blank" alt="vk"/>
                            <LinkItem onClick={GithubProfileClick} href="https://github.com/1uckyy" icon={github} wnd="_blank" alt="github"/>
                        </p>
                        </div>
                        <div className="col-lg-4 mod">
                        <h4 id="h4">It was nice to see you :)</h4>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;