import React, { Component } from 'react';
import Swiper from 'swiper';

class MovieSlider extends Component {
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     });
  }
  render() {
    return (
      <div className="movie-slider-wrapper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    )
  }
}

export default MovieSlider;
