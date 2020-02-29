import React, { Component } from 'react';
import LinkItem from './LinkItem';

/*images*/
import github from '../images/icons/github-icon.png';
import vk from '../images/icons/vk-icon.png';

class Footer extends Component {
    render () {
        return (
            <footer className="footer" id="footer">
                <div className="container centered">
                    <div className="row row-mod">
                        <div className="col-lg-4 mod">
                        <h4 id="h4">Contact:</h4>
                        <p>
                            <div>Email:</div>
                            <a href="mailto:novak.vlad97@mail.ru" className="footer-link">novak.vlad97@mail.ru</a>
                        </p>
                        <p>
                            <div>Phone:</div>
                            <a href="tel:89806550836" className="footer-link">89806550836</a>
                        </p>
                        </div>
                        <div className="col-lg-4 mod">
                        <h4 id="h4">Meet me on:</h4>
                        <p>
                            <LinkItem href="https://vk.com/1uckyy" icon={vk} wnd="_blank" alt="vk"/>
                            <LinkItem href="https://github.com/1uckyy" icon={github} wnd="_blank" alt="github"/>
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