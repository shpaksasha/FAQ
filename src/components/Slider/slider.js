import React from 'react';
import {Carousel} from "react-bootstrap";
import veloaImg from '../../images/1.jpg'
import velobImg from '../../images/2.jpg'
import velocImg from '../../images/3.jpeg'


const Slider = () => {
  return(
      <div>
        <Carousel position='fixed'>
            <Carousel.Item>
                <img className='d-block w-100 h-25' src={veloaImg} alt='bike'/>
                <Carousel.Caption>
                    <h3>It is a good trip</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate reiciendis sint veniam.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='d-block w-100 h-25' src={velobImg} alt='bike'/>
                <Carousel.Caption>
                    <h3>It is a good trip</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='d-block w-100 h-25' src={velocImg} alt='bike'/>
                <Carousel.Caption>
                    <h3>It is a good trip</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur dignissimos doloribus facere nesciunt officia ratione reprehenderit vitae voluptates? Voluptatum?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
  )
};

export default Slider;