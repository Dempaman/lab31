import React from 'react';
import './guess.css'
import PropTypes from 'prop-types';


class Chiper extends React.Component{
  constructor(props){
    super(props);

    this.state={
      value: "",
      cryptValue: ' ',
      shift: 1
    }
    this.crypt = this.crypt.bind(this);
    this.updateString = this.updateString.bind(this);
    this.updateShift = this.updateShift.bind(this);

  }

  updateString(event){
    this.setState({value: event.target.value });
  }
  updateShift(event){
    const re = /^[0-9\b]+$/;
     if (event.target.value == '' || re.test(event.target.value)) {
       if(event.target.value <= 25){
         this.setState({shift: event.target.value})
       }else{
         alert("Only number 1-25 is allowed");
       }
     }else{
       alert("Only number 1-25 is allowed");
     }
  }

  crypt(){

    let stateList = this.state.value;
    let output = '';

    for (var i = 0; i < stateList.length; i ++) {
      var c = stateList[i];
      //console.log(c);

      if (c.match(/[a-z]/i)) {

			// Get keycode from letter
			var code = stateList.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90)){
        c = String.fromCharCode(((code - 65 + Number(this.state.shift)) % 26) + 65)
      }
			// Lowercase letters
			else if ((code >= 97) && (code <= 122)){
          c = String.fromCharCode(((code - 97 + Number(this.state.shift)) % 26) + 97);
      }
		}
     output += c;
    console.log(output);
    this.setState({cryptValue: output})
    }

  }

  render(){
    return(
      <div>
      <textarea
        className="inputStyle"
        onChange={this.updateString}
        onKeyUp={this.crypt}
        value={this.state.value}

       />
       <input
       className="inputShift"
       value={this.state.shift}
       onChange={this.updateShift}
       type="text"
       pattern="[0-9]*"

        />
       <h1>{this.state.cryptValue}</h1>
       </div>
    )
  }
}

Chiper.propTypes = {
  shift: PropTypes.number
};
export default Chiper;
