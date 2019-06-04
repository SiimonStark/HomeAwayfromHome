import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      redirect: false,
      filters: {
        date: ['24hrs', 'Three days', 'One Week'],
        location: '',
        category: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ redirect: true });
  }

  renderFilters = () => {
    console.log('Render them filts')
    return (
      <div className="extra-filter">
        <select name='date' onChange={this.handleOption}>
          {this.state.filters.date.map(val =>
            <option key={val.length} >{val}</option>)}
        </select>
        <input name='location' type='text' className="filter-input"
          onChange={this.handleLocation} placeholder='Location' />
        <input name='category' type='text' className="filter-input"
          onChange={this.handleCategory} placeholder='Category' />
      </div>
    )
  }

  render() {
    if(this.state.redirect) {
      this.setState({redirect: false});
      return (<Redirect to='/jobs' />)
    }



    console.log('Route?', this.props.history)

    return (
      <form onSubmit={this.handleSubmit} onClick={this.handleRedirect}>
        <input className="keyword" type="search" placeholder="Search by keyword" />
        <button>
          <i className="fab fa-searchengin"></i>
        </button>
        {this.props.isActive && this.renderFilters()}
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  isActive: true,
  filter: state.filter
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Search);