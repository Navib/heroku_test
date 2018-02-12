import React, { Component } from 'react';
import Swiper from 'swiper';

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
      on: {
        reachEnd: function() {
          console.log("reached end! : ", window.pageYOffset);
          //document.querySelector('.scroll-content').style.transform = 'translate3d(0px, -682px, 0px)';

        }
      }
     });
  }
  render() {
    return (
      <div className="movie-slider-wrapper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default MovieSlider;
