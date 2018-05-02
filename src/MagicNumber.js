import React, {Component} from 'react';

class MagicNumber extends Component{

  render(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return(
        <span >{randomNumber}</span>
    );
  }
}

export default MagicNumber;
