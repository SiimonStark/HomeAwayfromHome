import React, {Component} from 'react';
import {connect} from 'react-redux';
import {counterInter} from '../../store/actions/';

export class TrackerInter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.counterInter || 0
    }
  }

  handleClick = (e) => {
    let {value} = e.target;
    let {counter} = this.state;
    value === '+' ? counter ++ : counter --;

    counterInter(counter);
    this.setState({counter});
  }

  render() {
    return(
      <section className="Tracker Interview">
        <h3>Interviews</h3>
        <article>
          <h2>{this.state.counter}</h2>
          <button onClick={this.handleClick}>-</button>
          <button onClick={this.handleClick}>+</button>
        </article>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  counterInter: state.counterInter
});

export const mapDispatchToProps = (dispatch) => ({
  counterInter: num => dispatch(counterInter(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerInter);