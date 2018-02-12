import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import BodyGrid from './../containers/body_grid';
import MovieSlider from './../components/movie_slider';
import Footer from './../components/footer';



class HomePage extends Component {
  componentDidMount() {
    var scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'));

    // scrollbar.addListener(function() {
    //   const scrollPos = true;
    //   let aboutA = scrollbar.isVisible(document.querySelector('.blue_bg'));
    //   console.log('visible:', aboutA);
    //
    // });

  }
  render() {
    return (
      <div className="home-page page-body" id="my-scrollbar">
        <MovieSlider />
        <BodyGrid
          id="0"
        />
        <BodyGrid
          color="blue"
          id="1"
        />
        <BodyGrid
          color="purple"
          id="2"
        />
        <Footer />
      </div>
    )
  }
}

export default HomePage;
