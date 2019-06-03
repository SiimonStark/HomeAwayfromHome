import React, { Component } from 'react';
import {connect} from 'react-redux';
import { mapDispatchToProps } from '../App';

export class TrackerAppl extends Component {
  constructor() {
    super()

  }

  handleIncr = () => {

  }

  handleDecr = () => {

  }

  render() {
    return (
      <section className="Tracker Applied">
        <h3>Jobs Applied</h3>
        <article>
          <h2>00</h2>
          <button>-</button>
          <button>+</button>
        </article>
      </section>
    )
  }
}

export const mapStateToProps = () => ({

})

export const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(TrackerAppl)