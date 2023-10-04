import React, { Component, useState } from "react";
import Casa from "./Casa";

class Tabuleiro extends Component {
  constructor(props){
    super(props);
    this.state = {
      jogador: "X",
      grid: Array(9).fill("")
    };
    this.trocaJogador = this.trocaJogador.bind(this);
  }

  trocaJogador = (i) => {
    let estado = this.state;
    this.state.grid[i] = this.state.jogador
    estado.jogador = (estado.jogador==="X"?"O":"X");
    this.setState(estado);
    let aux = this.vencedor();
    console.log("aux: " + aux);
    console.log(this.state.grid);
    if(aux !== ""){
      alert("O " + aux+ "venceu!!")
    }
  }

  vencedor = () => {
    for(let i=0;i<=2;i++){
      if(this.state.grid[3*i]===this.state.grid[3*i+1]&&this.state.grid[3*i]===this.state.grid[3*i+2]){
        return this.state.grid[3*i];
      }
      if(this.state.grid[i]===this.state.grid[i+3]&&this.state.grid[i]===this.state.grid[3*i+6]){
        return this.state.grid[i];
      }
    }
    if(this.state.grid[0]===this.state.grid[4]&&this.state.grid[0]===this.state.grid[8]){
      return this.state.grid[0];
    }
    if(this.state.grid[2]===this.state.grid[4]&&this.state.grid[2]===this.state.grid[6]){
      return this.state.grid[2];
    }
    return "";
  }

  render(){
    return(
      <table>
        <tr>
          <td><Casa tag="0" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
          <td><Casa tag="1" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
          <td><Casa tag="2" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
        </tr>
        <tr>
          <td><Casa tag="3" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
          <td><Casa tag="4" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
          <td><Casa tag="5" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
        </tr>
        <tr>
          <td><Casa tag="6" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
          <td><Casa tag="7" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
          <td><Casa tag="8" marca={this.state.jogador} onClick={this.trocaJogador}></Casa></td>
        </tr>
      </table>
    );
  }
}
export default Tabuleiro;
