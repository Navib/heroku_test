import React, { Component } from 'react';
import Swiper from 'swiper';

import MovieSlides from './../containers/movie_slides';

class MovieSlider extends Component {
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: {
        invert: false,
        releaseOnEdges: true,
        sensitivity: 1
      },
      pagination: {
        el: '.swiper-pagination',
      },
     });
  }
  render() {
    return (
      <div className="movie-slider-wrapper">
        <div className="swiper-container">
          <MovieSlides />
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default MovieSlider;
