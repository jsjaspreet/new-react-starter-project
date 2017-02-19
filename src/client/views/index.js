import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Home extends Component {

  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // async handleClick(event) {
  //   try {
  //     const moment = await import('moment')
  //     console.log(moment().format('LLLL'))
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }
  state = {
    numClicks: 0
  }

  handleClick = () => {
    this.setState({ numClicks: ++this.state.numClicks })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <div>
          {this.state.numClicks}
        </div>
      </div>)
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    )
  }
}

export default App