import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Favorites extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="Job__display">
        <div className="Fav__container">
          Favorites container
        </div>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Favorites);