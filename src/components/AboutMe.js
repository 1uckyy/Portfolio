import React, { Component } from 'react';
import LinkItem from './LinkItem';

//google analytics functions
import { LinkedinClick, VkClick, GithubProfileClick, EmailClick, PhoneClick } from './ClickEventFunctions'

/*images*/
import im from '../images/im.jpg';
import mail from '../images/icons/mail-icon.png';
import github from '../images/icons/github-icon.png';
import phone from '../images/icons/phone-icon.png';
import vk from '../images/icons/vk-icon.png';
import linkedin from '../images/icons/linkedin-icon.png';

class AboutMe extends Component {
    render () {
        return (
            <div className="aboutMe">
                <div className="container centered centerRowFlex">
                <div className="row">
                    <div className="col-lg-7 mt">
                    <img className="avatar" src={im} alt="Vladislav Novak"></img>
                    <hr className="hr"/>
                    <div>Programmer at Labmedia Ltd.</div>
                    <hr className="hr"/>
                    <div className="links">
                        <LinkItem onClick={LinkedinClick} href="https://www.linkedin.com/in/vladislav-novak-5755621a4/" icon={linkedin} wnd="_blank" alt="linkedin"/>
                        <LinkItem onClick={VkClick} href="https://vk.com/1uckyy" icon={vk} wnd="_blank" alt="vk"/>
                        <LinkItem onClick={GithubProfileClick} href="https://github.com/1uckyy" icon={github} wnd="_blank" alt="github"/>
                        <LinkItem onClick={EmailClick} href="mailto:novak.vlad97@mail.ru" icon={mail} alt="mail"/>
                        <LinkItem onClick={PhoneClick} href="tel:89806550836" icon={phone} alt="phone"/>
                    </div>
                    </div>
                    <div className="col-lg-5">
                        <p>I am a young programmer and you are welcome to my web-portfolio.</p>
                        <h3>About me:</h3>
                        <p>Yaroslavl - Russia</p>
                        <p>Composing music in FL studio</p>
                        <p>Video editing in After Effects</p>
                        <p>Basketball player, regular runner, chess player</p>
                        <h3>Languages:</h3>
                        <p><b>Russian</b>: native</p>
                        <p><b>English</b>: basic knowledge</p>
                        <h3>Dev. skills:</h3>
                        <p>SP-XML, WebTutor, C#, Vue, SQL Server, PostgreSQL, Git</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;