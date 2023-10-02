import React, { Component } from "react";

class Casa extends Component {
  constructor(props){
    super(props);
    this.state = {
      marca: ""
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    if(this.state.marca === ""){
      this.setState({marca: this.props.marca});
    }
  }

  render(){
    return(
      <button onClick={this.onClick}> {this.state.marca} </button>
    )
  }
};

export default Casa;
