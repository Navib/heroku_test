import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieSlides extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  renderSlides() {
     return this.props.movieSlides.map((item) => {
       return (
         <div
           className="swiper-slide"
           key={item.id}
           >
            <h1>{item.title}</h1>
            <p>{item.content}</p>
         </div>
       );
     });
  }
  render() {
    return (
      <div className="swiper-wrapper">
        {this.renderSlides()}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  movieSlides: state.movieSlides
})

export default connect(mapStateToProps)(MovieSlides);
