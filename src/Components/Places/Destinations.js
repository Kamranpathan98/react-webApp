import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import "./Destinations.css"
import data from "./data.json"
import { sliderSettings } from '../SliderSettings'

const Destinations = () => {
    return (
        <section className='d-wrapper'>
            <div className='paddings innerWidth d-container'>
                <div className='d-head flexColStart'>
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Destinations</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {data.map((card, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flexColStart d-card'>
                                    <img src={card.image} alt='home' />
                                    <span className='secondaryText d-price'>
                                        <span style={{ color: "orange" }}>$</span><span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Destinations

const SliderButtons = () => {

    const swiper = useSwiper()
    return (
        <div className='flexCenter d-buttons'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}