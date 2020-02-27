import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import LinkItem from './components/LinkItem';

/*images*/
import vk from './images/icons/vk-icon.png';
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

function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <div className="projectsContainer" id="projects">
        <div className="col-lg-6 centered">
            <h3 className="projectsTitle">Projects</h3>
            <hr className="hr"/>
        </div>
        <div className="carouselContainer">
          <Carousel>
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
            <LinkItem href="https://github.com/1uckyy/ApartmentPlannerFlaskReact" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem href="https://apartment-planner.herokuapp.com/" icon={link} wnd="_blank" alt="heroku"/>
          </div>
          <h3 className="projectsTitle prjTtl">Apartment Planner</h3>
          <p>Etiam imperdiet urna vitae lacus interdum, vel porta tellus sollicitudin.</p>
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
            <LinkItem href="https://github.com/1uckyy/SolarSystem" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem href={sys_pdf} icon={pdf} alt="pdf file"/>
            <LinkItem href="https://1uckyy.github.io/" icon={link} wnd="_blank" alt="gh-pages"/>
          </div>
          <h3 className="projectsTitle prjTtl">Solar system</h3>
          <p>Etiam imperdiet urna vitae lacus interdum, vel porta tellus sollicitudin.</p>
        </div>
        <hr className="hr" style={{maxWidth: "50%", margin: "1em auto"}}/>
        <div className="carouselContainer">
          <Carousel>
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
            <LinkItem href="https://github.com/1uckyy/social-e-library-server" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem href="https://social-e-library.herokuapp.com/" icon={link} wnd="_blank" alt="gh-pages"/>
          </div>
          <h3 className="projectsTitle prjTtl">Social e-library</h3>
          <p>Etiam imperdiet urna vitae lacus interdum, vel porta tellus sollicitudin.</p>
        </div>
        <hr className="hr" style={{maxWidth: "50%", margin: "1em auto"}}/>
        <div className="carouselContainer">
          <Carousel>
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
            <LinkItem href="https://github.com/1uckyy/Simplex-Method/tree/remembering-type-of-steps" icon={github} wnd="_blank" alt="github repo"/>
            <LinkItem href={"https://drive.google.com/open?id=1uyw0ArTA05LjTb1wkQNZeUhEFjAW5DDX"} icon={zip} wnd="_blank" alt="zip file"/>
          </div>
          <h3 className="projectsTitle prjTtl">Simplex method</h3>
          <p>Etiam imperdiet urna vitae lacus interdum, vel porta tellus sollicitudin.</p>
        </div>
      </div>
      <footer className="footer" id="footer">
        <div className="container centered">
          <div className="row row-mod">
            <div className="col-lg-4 mod">
              <h4 id="h4">Contact:</h4>
              <p>Email:
                <a href="mailto:novak.vlad97@mail.ru" className="footer-link">novak.vlad97@mail.ru</a>
              </p>
              <p>Phone:
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
    </div>
  );
}
//https://drive.google.com/open?id=1uyw0ArTA05LjTb1wkQNZeUhEFjAW5DDX
export default App;
