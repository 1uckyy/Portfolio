import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

/*images*/
import planner1 from './images/aprtm_plnr1.jpg';

function App() {
  return (
    <div className="App-header">
      <div className="nameAuthor">vladislav novak</div>
      <div className="contacts">Contacts</div>
      <div>Email:</div><a href="mailto:novak.vlad97@mail.ru">novak.vlad97@mail.ru</a>
      <div>Phone number:</div><a href="tel:89806550836">89806550836</a>
      <div>VK:</div><a href="https://vk.com/1uckyy">@1uckyy</a>
      <div>Links</div>
      <div>Github:</div><a href="https://github.com/1uckyy">@1uckyy</a>
      <div>Projects</div>
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
            src="holder.js/800x400?text=Second slide&bg=282c34"
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
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
