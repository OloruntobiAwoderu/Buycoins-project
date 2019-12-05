import React from "react";
import "./App.css";
import TableList from "./component/tableList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      next: 0
    };
  }
  componentDidMount() {
    fetch(`https://api.coinlore.com/api/tickers/?start=0&limit=10`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          coinData: results.data
        });
      });
  }
  handleClick = () => {
    fetch(
      `https://api.coinlore.com/api/tickers/?start=${this.state.next +
        10}&limit=10`
    )
      .then(response => response.json())
      .then(results => {
        this.setState({
          coinData: results.data,
          next: this.state.next + 10
        });
      });
  };
  handlePrevClick = () => {
    fetch(
      `https://api.coinlore.com/api/tickers/?start=${this.state.next -
        10}&limit=10`
    )
      .then(response => response.json())
      .then(results => {
        this.setState({
          coinData: results.data,
          next: this.state.next - 10
        });
      });
  };
  ButtonRender() {
    const { next } = this.state;
    if (next === 0) {
      return (
        <button onClick={this.handleClick} className="button">
          Next{"  "}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      );
    } else if (next > 0) {
      return (
        <div className="ButtonName">
          <button onClick={this.handleClick} className="button button-1"> 
            <FontAwesomeIcon icon={faArrowLeft} />
            {"  "}Previous
          </button>
          <button onClick={this.handleClick} className="button button-2">
            Next{"  "}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          
        </div>
      );
    } else if (next > 2960) {
      return <button onClick={this.handlePrevClick}>prev</button>;
    }
  }
  render() {
    return (
      <div className="App card">
        <TableList results={this.state.coinData} />
        {this.ButtonRender()}
      </div>
    );
  }
}

export default App;
