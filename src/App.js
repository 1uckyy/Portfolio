import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import LinkItem from './components/LinkItem';
import Footer from './components/Footer';

//google analytics
import ReactGA from 'react-ga';

//google analytics functions
import { GithubPlanner, GithubSolar, GithubSocial, GithubSimplex, GithubCashbox, HerokuPlanner, PageSolar, HerokuSocial, HerokuCashbox } from './components/ClickEventFunctions'

/*images*/
import github from './images/icons/github-icon.png';
import link from './images/icons/link-icon.png';
import pdf from './images/icons/pdf-icon.png';
import zip from './images/icons/zip-icon.png';
/*planner*/
import planner1 from './images/aprtm_plnr1.jpg';
import planner2 from './images/aprtm_plnr2.jpg';
import planner3 from './images/aprtm_plnr3.jpg';
import planner4 from './images/aprtm_plnr4.jpg';
/*solar system*/
import solar_sys1 from './images/solar_sys1.jpg';
import solar_sys2 from './images/solar_sys2.jpg';
import solar_sys3 from './images/solar_sys3.jpg';
import solar_sys4 from './images/solar_sys4.jpg';
import sys_pdf from './Solar System.pdf';
/*social library*/
import social_lib1 from './images/social_lib1.jpg';
import social_lib2 from './images/social_lib2.jpg';
import social_lib3 from './images/social_lib3.jpg';
/*simplex method*/
import simplex1 from './images/simplex1.jpg';
import simplex2 from './images/simplex2.jpg';
import simplex3 from './images/simplex3.jpg';
import simplex4 from './images/simplex4.jpg';
/*cashbox*/
import cashbox1 from './images/cashbox1.jpg';
import cashbox2 from './images/cashbox2.jpg';
import cashbox3 from './images/cashbox3.jpg';

/*Google analytics*/
function initializeReactGA() {
  ReactGA.initialize('UA-159291087-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeReactGA();
  return (
    <div>
      <Header/>
      <AboutMe/>
      <div className="projectsContainer">
        <div className="col-lg-6 centered">
            <h3 className="projectsTitle prj">Projects</h3>
            <hr className="hr"/>
        </div>
        <div className="carouselContainer">
          <Carousel id="graybg">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={planner1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={planner2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={planner3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={planner4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <LinkItem onClick={GithubPlanner} href="https://github.com/1uckyy/ApartmentPlannerFlaskReact" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem onClick={HerokuPlanner} href="https://apartment-planner.herokuapp.com/" icon={link} wnd="_blank" alt="heroku"/>
          </div>
          <h3 className="projectsTitle prjTtl">Apartment Planner <i className="devicon-react-original colored"></i> <i class="devicon-python-plain colored"></i> <i className="devicon-mongodb-plain colored"></i></h3>
          <p>Web application for floor planning.</p>
        </div>
        <hr className="hr" style={{maxWidth: "50%", margin: "1em auto"}}/>
        <div className="carouselContainer">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={solar_sys1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={solar_sys2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={solar_sys3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={solar_sys4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <LinkItem onClick={GithubSolar} href="https://github.com/1uckyy/SolarSystem" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem href={sys_pdf} icon={pdf} alt="pdf file"/>
            <LinkItem onClick={PageSolar} href="https://1uckyy.github.io/" icon={link} wnd="_blank" alt="gh-pages"/>
          </div>
          <h3 className="projectsTitle prjTtl">Solar system <i class="devicon-javascript-plain colored"></i></h3>
          <p>3d model of the solar system.</p>
        </div>
        <hr className="hr" style={{maxWidth: "50%", margin: "1em auto"}}/>
        <div className="carouselContainer">
          <Carousel id="blackarrows">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={social_lib1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={social_lib2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={social_lib3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <LinkItem onClick={GithubSocial} href="https://github.com/1uckyy/social-e-library-server" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem onClick={HerokuSocial} href="https://social-e-library.herokuapp.com/" icon={link} wnd="_blank" alt="gh-pages"/>
          </div>
          <h3 className="projectsTitle prjTtl">Social e-library <i class="devicon-react-original colored"></i> <i class="devicon-nodejs-plain colored"></i> <i class="devicon-express-original colored"></i> <i class="devicon-mongodb-plain colored"></i></h3>
          <p>This library is intended primarily for creative people who want to express themselves through literary works and share this with other people.</p>
        </div>
        <hr className="hr" style={{maxWidth: "50%", margin: "1em auto"}}/>
        <div className="carouselContainer">
          <Carousel id="blackbg">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={simplex1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={simplex2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={simplex3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={simplex4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <LinkItem onClick={GithubSimplex} href="https://github.com/1uckyy/Simplex-Method/tree/remembering-type-of-steps" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem href={"https://drive.google.com/open?id=1uyw0ArTA05LjTb1wkQNZeUhEFjAW5DDX"} icon={zip} wnd="_blank" alt="zip file"/>
          </div>
          <h3 className="projectsTitle prjTtl">Simplex method <i class="devicon-csharp-plain colored"></i></h3>
          <p>A program that allows solving the linear programming problem by the simplex method.</p>
        </div>
        <hr className="hr" style={{maxWidth: "50%", margin: "1em auto"}}/>
        <div className="carouselContainer">
          <Carousel id="blackbg">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cashbox1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cashbox2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cashbox3}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <LinkItem onClick={GithubCashbox} href="https://github.com/RacoonSTR/react-kassa/tree/master/client/src/components/Cashiers" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem onClick={HerokuCashbox} href="https://tensor-react-kassa.herokuapp.com/" icon={link} wnd="_blank" alt="gh-pages"/>
          </div>
          <h3 className="projectsTitle prjTtl">Cashbox(teamwork experience) <i class="devicon-react-original colored"></i> <i class="devicon-typescript-plain colored"></i> <i class="devicon-mongodb-plain colored"></i></h3>
          <p>This project is a cashbox software. The project was developed by the team as part of the training course. The group was divided into programmers, testers, assembler, designers and others. I was developing component "Cashiers". This is an invaluable experience for me.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
