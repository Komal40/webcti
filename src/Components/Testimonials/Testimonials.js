import React from 'react'
import './Testimonials.css'
import img1 from '../Images/mx.jpg'
import img2 from '../Images/hrsh.png'
import img3 from '../Images/dri.jpg'
import img4 from '../imgs/peoples/p4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials() {
  return (
    <>
    <hr className='testimonial_hr' />
    <section id='testimonials'>
    <h1 className='test__head' >Testimonials</h1>

        <Swiper 
         // install Swiper modules
       
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
        className='container__test testimonials__container'>
         
            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>                    
                    <img src={img1} alt='people' />                                   
                </div>
                <h3 className='client__name'>Micromax</h3>
                    <small className='client__review'>
                    <p>I am very impressed by the quality of the team working on our project. Not only is the code top quality which many development houses can write but the team displays a real understanding of our issues and comes to the table with suggestions and ideas that are very impressive. They never “just accept” what we tell them,they always question if what we are suggesting is the best way to approach the problem.</p>
                    </small>    
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={img2} alt='people' />
                                   
                </div>
                <h3 className='client__name'>Harish Bakery</h3>
                    <small className='client__review'>
                    <p>I am very pleased with your Project Management capability. Your team has an excellent communication skills and a fast response and turn around time as well as Highest work quality. I can say that Cellustechindia is a honest and decent group of people with the highest work ethic I have seen for development team.</p>
                    </small>    
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={img3} alt='people' />                                   
                </div>
                <h3 className='client__name'>DRI Bhiwadi</h3>
                    <small className='client__review'>
                    <p>I have been extremely pleased with the services provided by Cellus Tech India. Their professionalism and attention to detail have truly set them apart. From the moment I engaged with them, I could sense their commitment to delivering high-quality solutions. They not only met our requirements but exceeded our expectations in every aspect.</p>
                    </small>    
            </SwiperSlide>

           
        </Swiper>
    </section>
    </>
  )
}


