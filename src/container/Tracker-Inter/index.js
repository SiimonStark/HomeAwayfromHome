import React, {Component} from 'react';
import {connect} from 'react-redux';
import {counterInter} from '../../store/actions/';

export class TrackerInter extends Component {

  handleClick = (e) => {
    let { id } = e.target;
    let { counter } = this.props

    if (counter > 0) {
      id === 'plus' ? counter++ : counter--;
    } else {
      id === 'plus' ? counter++ : counter = 0;
    }

    this.props.counterInter(counter);
  }

  render() {
    return(
      <section className="Tracker Interview">
        <h3>Interviews</h3>
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
  counter: state.counterInter
});

export const mapDispatchToProps = (dispatch) => ({
  counterInter: num => dispatch(counterInter(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerInter);