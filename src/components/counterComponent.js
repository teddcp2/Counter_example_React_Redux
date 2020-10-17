import React, { Component } from 'react';
import ButtonComponent   from './button';
import {increment, decrement} from '../Actions';
import {connect} from 'react-redux';

class Counter extends Component{

  render(){
    return (
      <div className="ui card">
        <div className="ui label">
          <div className="item">
            <h5 className="">
              Value&nbsp;
              <p className="ui red label circular "> {this.props.value}</p>
            </h5>
          </div>
        </div>

        <div className="extra content">
          <div className="ui two buttons">
          <ButtonComponent label='increment' method={this.props.increment} />
          <ButtonComponent label='decrement' method={this.props.decrement} />
          </div>
        </div>
      </div>
    )
    
  }
}

const mapStateToProps = (store) => {
  console.log('STORE--', store);
  return {value: store.value}
}

/*  
// ONE way

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapActionToProps)(Counter);
*/


// Second Way
export default connect(mapStateToProps, {increment, decrement})(Counter);
