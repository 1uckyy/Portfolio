import React, { Component } from 'react';
import LinkItem from './LinkItem';

/*images*/
import im from '../images/im.jpg';
import mail from '../images/icons/mail-icon.png';
import github from '../images/icons/github-icon.png';
import phone from '../images/icons/phone-icon.png';
import vk from '../images/icons/vk-icon.png';

class AboutMe extends Component {
    render () {
        return (
            <div className="aboutMe">
                <div className="container centered">
                <div className="row">
                    <div className="col-lg-7 mt">
                    <img className="avatar" src={im} alt="Vladislav Novak"></img>
                    <hr className="hr"/>
                    <div>4th year student of Yaroslavl State University named after P. G. Demidov.</div>
                    <hr className="hr"/>
                    <div>
                        <LinkItem href="https://vk.com/1uckyy" icon={vk} wnd="_blank" alt="vk"/>
                        <LinkItem href="https://github.com/1uckyy" icon={github} wnd="_blank" alt="github"/>
                        <LinkItem href="mailto:novak.vlad97@mail.ru" icon={mail} alt="mail"/>
                        <LinkItem href="tel:89806550836" icon={phone} alt="phone"/>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius purus non tellus maximus, sed ultricies felis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vitae odio a elit dapibus faucibus eget non nibh. Praesent iaculis auctor elit eu efficitur. Integer quis tempor nibh, sed malesuada neque. Cras dapibus, sem id tincidunt congue, eros dui suscipit dui, at maximus sem ex ac risus. Maecenas lacinia arcu sed placerat auctor. Vivamus ullamcorper lobortis turpis non placerat. Integer metus mi, semper eget consequat eu, mollis vitae elit. Nam volutpat varius libero sed tempus. Sed eget auctor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat volutpat risus, vitae congue nisl porttitor sed. Mauris eleifend sem eu aliquet vestibulum.
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;