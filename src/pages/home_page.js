import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import BodyGrid from './../containers/body_grid';
import MovieSlider from './../components/movie_slider';



class HomePage extends Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#my-scrollbar'));
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
      </div>
    )
  }
}

export default HomePage;
