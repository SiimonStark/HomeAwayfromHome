import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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
    // !! Expiremental
    this.setState({[name]: value})
  }
  dateSelection = (name) => {
    // !! Expiremental
    return options[name].map(el => (<option value={el}>{el}</option>))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <NavBar />
        <div className="display">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/jobs' component={Jobboard} />
          <Route path='/fav' component={Favorites} />
          <Route component={Error404} />
        </Switch>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  recentThunk: (URL) => dispatch(recentThunk(URL))
});

export default connect(null, mapDispatchToProps)(App);
