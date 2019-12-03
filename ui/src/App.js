import React from "react";
import "./App.css";
import TableList from "./component/tableList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: []
    };
  }
  componentDidMount(){
    fetch(`https://api.coinlore.com/api/tickers/?start=0&limit=10`)
    .then(response => response.json())
    .then(results => {
      console.log(results)
      this.setState({
        coinData: results.data
      })
    })
  
  }
  handleClick = () => {
   let i = 10
    fetch(`https://api.coinlore.com/api/tickers/?start=${i++}&limit=10`)
    .then(response => response.json())
    .then(results => {
      console.log(results)
      this.setState({
        coinData: results.data
      })
    })
  }
  render() {
    return <div className="App card">
      <TableList results={this.state.coinData} />
      <button onClick={this.handleClick}>Nexxt</button>
    </div>;
  }
}

export default App;
