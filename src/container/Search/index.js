import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {extendFilter} from '../../store/actions/';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extend: this.props.isActive || false,
      redirect: false,
      filters: {
        keyword: '',
        date: ['All', '24hrs', 'Three days', 'One Week'],
        location: '',
        category: ''
      }
    }
  }

  handleExtend = () => {
    this.props.extendFilter(true);
    this.setState({extend: true})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ redirect: true });
  }

  renderFilters = () => {
    console.log('Render them filts')
    return (
      <div className="extra-filter">
        <select name='date' onChange={this.handleOption} >
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
      this.props.extendFilter(false);
      this.setState({redirect: false, extend: false});
      return (<Redirect to='/jobs' />)
    }

    return (
      <form onSubmit={this.handleSubmit} onClick={this.handleRedirect}>
        <input className="keyword" type="search" 
          onClick={this.handleExtend} 
          placeholder="Search by keyword" />
        <button>
          <i className="fab fa-searchengin"></i>
        </button>
        {this.state.extend && this.renderFilters()}
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  isActive: state.search.isSearch,
  filter: state.search.filter
})

export const mapDispatchToProps = (dispatch) => ({
  extendFilter: (bool)=> dispatch(extendFilter(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);