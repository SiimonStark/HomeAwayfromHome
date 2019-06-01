import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Dashboard from '../../components/Dashboard';
import {findTheTime, options} from '../../utils/functions/helper';
import {URL} from '../../utils/api/api_paths';

export class App extends Component {
  constructor() {
    super()
    this.state={
      month: 'July',
      day: '7',
      year: '1995'
    }
  }

  componentDidMount = () => {
    let targetUrl = `&method=aj.jobs.search&keywords=react`

    fetch(URL + targetUrl)
      .then(response=> response.json())
      .then(result=> console.log(result))
  }

  setStateDate = ({name, value}) => {
    this.setState({[name]: value})
  }

  dateSelection = (name) => {
    return options[name].map(el => (<option value={el}>{el}</option>))
  }

  render(){
    console.log('state:', this.state)
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Route exact to='/' component={Dashboard} />
        <Route exact to='/404' component={Error404} />
        <Route exact to='/jobs' component={Jobboard} />
        <Route exact to='/fav' component={Favorites} />
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

export const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(null, mapDispatchToProps)(App);
