import React, { Component } from 'react';
import Guess from './Guess.js';
import Chiper from './Chiper.js';
import './tabs.css'

class Tab extends Component{
  constructor(props){
    super(props);
    //this.renderLabels = this.renderLabels.bind(this);
    this.tabList = {
      tab1:{
        label: 'Tab One',
        content: <Chiper />
      },

      tab2:{
        label: 'Tab Two',
        content: 'Här ska "Låst textfält" ligga?'
      },

      tab3:{
        label: 'Tab Three',
        content: <Guess />
      },
    };

    const activeTabs = 'tab1';

    this.state = {
      tabItem: this.tabList[activeTabs],
      active: activeTabs,
    };
  }

    changeTab(item, activeTabs) {
     this.setState({
       tabItem: item,
       active: activeTabs,
     });
   }

    renderLabels = event =>{
      const label = Object.keys(this.tabList).map((value, index) => {
        
        console.log("value på våra tabs: ", value)
        console.log("index nummret på array: ",index)
        console.log("this.tabList : ", this.tabList);
        console.log(" ")
        console.log("Object.keys ", Object.keys(this.tabList))
        console.log(" ")

        let status = '';
        if(value === this.state.active){
          status = 'active';
        }
        return (
          <div className = {status} onClick = {this.changeTab.bind(this, this.tabList[value], value)} key = {this.tabList[value].label}>
            {this.tabList[value].label}
          </div>
        )
      });
      return label;
    }

  render(){
    return(
      <div className = "wrap">

        <div className = "tabStyle" >
          <div className = "labels">{this.renderLabels()}</div>
        </div>

        <div className = "itemStyle">
          <span>{this.state.tabItem.content}</span>
        </div>

      </div>
    )
  }
}


export default Tab;
