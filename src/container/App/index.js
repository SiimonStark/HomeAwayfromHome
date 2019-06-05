import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../../components/Header/';
import NavBar from '../../components/NavBar/';
import Dashboard from '../../components/Dashboard/';
import Error404 from '../../components/Error-404/';
import Jobboard from '../JobBoard/';
import Favorites from '../Favorites/';

import {findTheTime, options} from '../../utils/functions/helper';
import {URL} from '../../utils/api/api_paths';
import {recentThunk} from '../../middleware/recentThunk';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      month: 'July',
      day: '7',
      year: '1995'
    }
  }

  componentDidMount() {
    let targetUrl = `&method=aj.jobs.search&keywords=react`;

    this.props.recentThunk(URL + targetUrl)
  }

  setStateDate = ({name, value}) => {
    this.setState({[name]: value})
  }

  dateSelection = (name) => {
    return options[name].map(el => (<option value={el}>{el}</option>))
  }

  render(){
    console.log('App state:', this.state)
    console.log('App P:', this.props.recent)

    return (
      <div className="App">
        <Header />
        <NavBar />
        <div className="display">
          <Route exact to='/' component={Dashboard} />
          <Route exact to='/error404' component={Error404} />
          <Route exact to='/jobs' component={Jobboard} />
          <Route exact to='/fav' component={Favorites} />
        </div>
        <h2>UNIX = {findTheTime(this.state)}</h2>
        <select name="month" onChange={(e) => this.setStateDate(e.target)}>
          {this.dateSelection('months')}
        </select>
        <select name="day" onChange={(e) => this.setStateDate(e.target)}>
          {this.dateSelection('days')}
        </select>
        <select name="year" onChange={(e) => this.setStateDate(e.target)}>
          {this.dateSelection('years')}
        </select>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  recent: state.jobs.recent
})

export const mapDispatchToProps = (dispatch) => ({
  recentThunk: (URL) => dispatch(recentThunk(URL))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
