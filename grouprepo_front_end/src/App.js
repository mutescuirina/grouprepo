import React from 'react';
import './App.css';
import NewForm from './Components/NewForm'
let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      towns: [],
      town: {}
    }
  }
  componentDidMount() {
    this.getTowns()
  }
  getTowns() {
    fetch(baseURL + '/towns')
      .then(data => {
        return data.json()
      },
        err => console.log(err))
      .then(parsedData => this.setState({ towns: parsedData }),
        err => console.log(err))

  }

  render() {
    return (
      <div className="App">
        <h1>Towns of CT</h1>
        <NewForm />
        <table>
          <tbody>
            {this.state.towns.map(town => {
              return (
                <tr key={town._id}>
                  <td>
                    {town.name}
                  </td>
                  <td>
                    {town.population ? <td> {town.population}</td>: <td>n/a</td> }
                  </td>
                  
                    {town.coast ? <td>this is on the coast</td>: <td>this is the woods</td> }
                  

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}


export default App;
