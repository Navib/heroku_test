import React, { Component } from 'react';
import { connect } from 'react-redux';

 class BodyGrid extends Component {
   constructor(props) {
     super(props);
     console.log(this.props);

   }
   renderGrid() {
     const _id = this.props.id;
     return this.props.gridItem[_id].map((item) => {
       return (
         <div
           className="list-group-item"
           key={item.quote}
           >{item.quote}
         </div>
       );
     });
   }
   renderGridLarge() {
     const _id = this.props.id;
     return this.props.gridItemLarge[_id].map((item) => {
       return (
         <div
           className="list-group-item-large"
           key={item.quote}
           >{item.quote}
         </div>
       );
     });
   }
  render() {
    return (
      <div className={`body-grid-wrapper ${this.props.color}_bg`}>
        <div className="quote-wrapper">
          {this.renderGrid()}
        </div>
        <div className="single-quote">{this.renderGridLarge()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gridItem: state.gridItem,
  gridItemLarge: state.gridItemLarge,
})

export default connect(mapStateToProps)(BodyGrid);
