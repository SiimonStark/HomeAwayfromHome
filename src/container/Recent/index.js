import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Recent extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="Recent">
        <div className="Recent__container">
          <article>
            <p>JOB #1</p>
          </article>
          <article>
            <p>JOB #2</p>
          </article>
          <article>
            <p>JOB #3</p>
          </article>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = () => {

}

export const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Recent);