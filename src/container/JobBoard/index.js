import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Jobboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="Job__display">
        <div className="Jobboard__container">
          Test Jobboard
        </div>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Jobboard);