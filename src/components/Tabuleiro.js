import React, { Component, useState } from "react";
import Casa from "./Casa";

class Tabuleiro extends Component {
  constructor(props){
    super(props);
    this.state = {
      jogador: "X",
      grid: Array(9).fill("")
    };
  }

  trocaJogador = () => {
    let estado = this.state;
    estado.jogador = (estado.jogador==="X"?"O":"X");
    this.setState(estado);
  }

  render(){
    return(
      <table>
        <tr>
          <td><Casa marca={this.state.grid[1]}></Casa></td>
          <td><Casa marca={this.state.grid[2]}></Casa></td>
          <td><Casa marca={this.state.grid[3]}></Casa></td>
        </tr>
        <tr>
          <td><Casa marca={this.state.grid[4]}></Casa></td>
          <td><Casa marca={this.state.grid[5]}></Casa></td>
          <td><Casa marca={this.state.grid[6]}></Casa></td>
        </tr>
        <tr>
          <td><Casa marca={this.state.grid[7]}></Casa></td>
          <td><Casa marca={this.state.grid[8]}></Casa></td>
          <td><Casa marca={this.state.grid[9]}></Casa></td>
        </tr>
      </table>
    );
  }
}
export default Tabuleiro;
