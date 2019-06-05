import React, { Component } from 'react';
import {connect} from 'react-redux';
import {counterAppl} from '../../store/actions/';

export class TrackerAppl extends Component {

  handleClick = (e) => {
    let {id} = e.target;
    let {counter} = this.props

    if (counter > 0) {
      id === 'plus' ? counter ++ : counter --;
    } else {
      id === 'plus' ? counter++ : counter = 0;
    }

    this.props.counterAppl(counter);
  }

  render() {
    return (
      <section className="Tracker Applied">
        <h3>Jobs Applied</h3>
        <h2>{this.props.counter}</h2>
        <div className="Tracker__btn">
          <i id="minus"
            onClick={this.handleClick}
            className="fas fa-minus-circle"></i>
          <i id="plus"
            onClick={this.handleClick}
            className="fas fa-plus-circle"></i>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  counter: state.counterAppl
});

export const mapDispatchToProps = (dispatch) => ({
  counterAppl: num => dispatch(counterAppl(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerAppl);