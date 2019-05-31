import React, {Component} from 'react';
import {URL} from '../../utils/api/api_paths';

class App extends Component {
  constructor() {
    super()

  }

  componentDidMount = () => {
    let targetUrl = `&method=aj.jobs.search&keywords=react`

    fetch(URL + targetUrl)
      .then(response=> response.json())
      .then(result=> console.log(result))
  }

  render() {
    return (
      <div className="App">
        
      </div>
    )
  }
}

export default App;
