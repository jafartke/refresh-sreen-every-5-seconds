import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      counter: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ counter: this.state.counter + 1 }), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div>
        <h1>Refresh Sreen every 5 seconds</h1>
        {this.state.counter}
      </div>
    )
  }
}
export default App