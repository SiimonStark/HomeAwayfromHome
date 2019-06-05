import React, {Component} from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/';

export class Recent extends Component {
  
  renderRecent = () => {
    let {listing} = this.props.recent;
    console.log('list', listing)
    return listing.map(li => {
      return (
        <article className="recent-job" key={li.id}>
          <div className="recent-header">
            <h3>Role: {li.title}</h3>
            <a href={li.apply_url}>Apply Here</a>
          </div>
          <div className="border"></div>
          <div className="recent-content">
            <h5>Post Date:({li.post_date})</h5>
            <h5>Company: {li.company.name}</h5>
            <p>{li.company.tagline}</p>
          </div>
        </article>
      )
    })
  }

  render() {
    let {loading} = this.props
    console.log('load', loading)
    let map;
    if (!loading) {
      map = this.renderRecent();
    }

    return (
      <section className="Recent">
        {loading && <Loading />}
        {map && 
          <div className="card-container">
            {map}
          </div>}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  loading: state.isLoading,
  recent: state.jobs.recent
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Recent);