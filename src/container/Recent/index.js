import React, {Component} from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/';

export class Recent extends Component {
  
  mapRecent = () => {
    
  }

  render() {
    console.log('RecentP', this.props)
    let isLoading;
    if (this.props.loading) {
      isLoading = <Loading />
    } else {
      isLoading = <p>test</p>
    }
    return (
      <section className="Recent">
        {isLoading}
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