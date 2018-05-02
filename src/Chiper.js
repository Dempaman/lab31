import React from 'react';
import './guess.css'


class Chiper extends React.Component{
  constructor(props){
    super(props);

    this.state={
      value: "",
      cryptValue: ' '
    }
    this.crypt = this.crypt.bind(this);
    this.updateString = this.updateString.bind(this);
  }

  updateString(event){
    this.setState({value: event.target.value });

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
        //Uppercase Z becomes A
        if(code === 90){
          c = String.fromCharCode(65)
        }else{
          c = String.fromCharCode(code + 1)
        }
      }

			// Lowercase letters
			else if ((code >= 97) && (code <= 122)){
        //lowercase z becomes a
        if(code === 122){
          c = String.fromCharCode(97)
          console.log("hej")
        }else{
          c = String.fromCharCode(code + 1)
        }
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
       <h1>{this.state.cryptValue}</h1>
       </div>
    )
  }
}


export default Chiper;
