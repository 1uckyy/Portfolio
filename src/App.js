import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

/*images*/
import planner1 from './images/aprtm_plnr1.jpg';
import planner2 from './images/aprtm_plnr2.jpg';
import planner3 from './images/aprtm_plnr3.jpg';
import planner4 from './images/aprtm_plnr4.jpg';
import im from './images/im.jpg';

function App() {
  return (
    <div>
      <div className="navWrap">
        <header className="header">
          <div className="container">
            <a className="nameAuthor" href="#top-navnar">vladislav novak</a>
            <div className="menu">
            <a className="menuItem">about me</a>
            <a className="menuItem">projects</a>
            <a className="menuItem">links</a>
            <a className="menuItem">contacts</a>
            </div>
          </div>
        </header>
      </div>
      <div className="aboutMe">
        <div className="container centered">
          <div className="row">
            <div className="col-lg-7 mt">
              <img className="avatar" src={im} alt="Vladislav Novak"></img>
              <hr/>
              <div>YarGU</div>
              <hr/>
            </div>
            <div className="col-lg-5">

            </div>
          </div>
        </div>
      </div>
      <div className="contacts" id="top-navnar">
        <div className="contacts">Contacts</div>
        <div>Email:</div><a href="mailto:novak.vlad97@mail.ru">novak.vlad97@mail.ru</a>
        <div>Phone number:</div><a href="tel:89806550836">89806550836</a>
        <div>VK:</div><a href="https://vk.com/1uckyy">@1uckyy</a>
      </div>
      <div>Links</div>
      <div>Github:</div><a href="https://github.com/1uckyy">@1uckyy</a>
      <div>Projects</div>
      <div className="carouselContainer">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={planner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={planner2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={planner3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={planner4}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
