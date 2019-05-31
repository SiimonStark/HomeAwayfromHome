import React, {Component} from 'react';
import {findTheTime, options} from '../../utils/functions/helper';
import {URL} from '../../utils/api/api_paths';

class App extends Component {
  constructor() {
    super()
    this.state={
      month: 'July',
      day: '7',
      year: '1995',
      option: {

        "day": ["1", "2"],
        "year": ["2018", "2019"]
      }
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

  render() {
    console.log('state:', this.state)
    return (
      <div className="App">
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

export default App;
