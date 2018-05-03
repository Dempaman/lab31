import React, {Component} from 'react';
import './guess.css';

class Checkbox extends Component{
  constructor(props){
    super(props);
    this.state = {
      check: true,
      disabled: true
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if(this.state.check === true){
      console.log("true")
      this.setState( {disabled: false} )
    }else{
      this.setState( {disabled: true} )
      console.log("false")
    }
    this.setState({[name]: value});

  }

  render(){
    return(
      <form>
        <div>
          <input
            name="check"
            type="checkbox"
            checked={this.state.check}
            onChange={this.handleCheck}
          />
          <input
            className="inputStyle"
            placeholder= " Try to type "
            disabled = {(this.state.disabled) ? "disabled" : ""}
          />
        </div>
      </form>
    );
  }//render
}




export default Checkbox;
