import React, { Component } from "react";

class Casa extends Component {
  constructor(props){
    super(props);
    this.state = {
      marca: "",
      tag: this.props.tag
    }
  }

  onClick = () => {
    if(this.state.marca === ""){
      this.setState({marca: this.props.marca});
      this.props.onClick(this.state.tag);
    }
  }

  render(){
    return(
      <button onClick={this.onClick}> {this.state.marca} </button>
    )
  }
};

export default Casa;
