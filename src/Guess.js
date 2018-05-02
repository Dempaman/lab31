import React, {Component} from 'react';
import './guess.css';

class Guess extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      answer: '',
      random: 0,
      sum: 0,
      totalSum: 0,
      guessNumber: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event) {
      this.setState({value: event.target.value});
    //  console.log('handleChange', this.state.value)
  }

  handleSubmit(event){
    const right = "You guessed right!";
    const low = "Too low..";
    const hight = "Too high..";
    const counter = +1;
    const plsEnter = "Please enter a number"
    let value = parseInt(this.state.value, 10);

    this.setState({guessNumber: "your guess was: " + value})

    this.setState({sum: this.state.sum + counter});

      if(this.state.random === value){
        this.setState({answer: right});
        this.setState({totalSum: this.state.sum});
      }else if(this.state.random < this.state.value){
        this.setState({answer: hight});

      }else{
        if(!this.state.value){
          this.setState({answer: plsEnter})
          this.setState({guessNumber: ''})
        }else{
          this.setState({answer: low});
          console.log("Too low!")
        }
      }

    event.preventDefault();
  }

  handleClick(){
    const min = 1;
    const max = 100;
    const deleteStr = '';
    const rand = Math.floor(Math.random() * (min + max));
    this.setState({random: rand});
    this.setState({answer: deleteStr});
    this.setState({totalSum: 0});
    this.setState({sum: 1});
    console.log("this.state.random: ", rand)

  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleSubmit(event);
    }
  }

  render(){

    return(
      <div className="numberStyle">

        <button className="getNumber" onClick={this.handleClick.bind(this)}>Click</button>
        {/*<div>The number is: {this.state.random}</div>*/}
        <div>{this.state.answer} {this.state.guessNumber} </div>
        <div>counter: {this.state.totalSum} </div>

        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}  className="inputStyle" placeholder="guess the magic number"></input>
          <button className="BtnSubmit" value="Submit">Submit</button>
        </form>

      </div>

    );
  }
}

export default Guess;
