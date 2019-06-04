import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Favorites extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section 
        className="Favorites Jobboard__container">
        Test Favorites
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);