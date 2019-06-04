import React, { Component } from 'react';
import {connect} from 'react-redux';
import {counterAppl} from '../../store/actions/';

export class TrackerAppl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.counterAppl
    }

  }

  handleClick = (e) => {
    let {value} = e.target;
    let {counter} = this.state;
    value === '+' ? counter ++ : counter --;

    counterAppl(counter);
    this.setState({counter});
  }

  render() {
    return (
      <section className="Tracker Applied">
        <h3>Jobs Applied</h3>
        <article>
          <h2>{this.state.counter}</h2>
          <button onClick={this.handleClick}>
            <i class="fas fa-minus-circle"></i>
          </button>
          <button onClick={this.handleClick}>
            <i className="fas fa-plus-circle"></i>
          </button>
        </article>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  counterAppl: state.counterAppl
});

export const mapDispatchToProps = (dispatch) => ({
  counterAppl: num => dispatch(counterAppl(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerAppl);