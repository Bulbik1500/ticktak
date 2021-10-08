import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square";


class Board extends React.Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return(
        this.props.squares.map((ArrayElements, index) => {
          const arrowSquareFunciton = () => this.props.handleSquareClick(index);
        
          return(
            <Square key={index} onClick={arrowSquareFunciton} value={ArrayElements} />
          );
        })
      );
    }
  }
  export default Board;
  