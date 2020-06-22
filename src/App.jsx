import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";
import {BackSpaceButton} from "./components/BackSpaceButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    let result = math.evaluate(this.state.input).toString();
    this.setState({input: result});
  };

  addOperator = val => {
    if (this.state.input !== "" && !isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({
        input: this.state.input + val,
      });
    }
  };

  handleBackSpace = () => {
    console.log(this.state.input.toString());
    console.log(this.state.input.length - 1);
    console.log(typeof this.state.input);
    console.log(this.state.input.toString().substring(0, this.state.input.length - 1 ));
    this.setState({input: this.state.input.toString().substring(0, this.state.input.length - 1 )});
  };


  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addOperator}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addOperator}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addOperator}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addOperator}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addOperator}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
            <BackSpaceButton handleClick = {() => this.handleBackSpace()}>
              Delete
            </BackSpaceButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
