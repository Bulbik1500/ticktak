import React from "react";
import ReactDOM from "react-dom"
import Board from "./Board";

class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        nextSymbol: "X",
      };
      this.handleSquareClick = this.handleSquareClick.bind(this);
    }
    
    handleSquareClick(index){
      
      const stateSquares = this.state.squares;
  
      if (stateSquares[index] !== null){
            return;
          }
  
      stateSquares[index] = this.state.nextSymbol;
      const nextSymbol = this.state.nextSymbol === "X" ? "O" : "X";
      this.setState(
        {squares: stateSquares, nextSymbol: nextSymbol});
        
        let Combination = this.win(stateSquares);
        if (Combination) {
          console.log(`Win ${Combination}`);
          this.setState({ gameWon: true });
        }
    }
  render(){
    return(
      <div className="grid-container">
      <Board 
        squares={this.state.squares}
        handleSquareClick={this.handleSquareClick} 
        />
        </div>
    );
  }

  win(squares) {
        const winningSquaresCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i = 0; i < winningSquaresCombinations.length; i++){
          const[a, b, c] = winningSquaresCombinations[i];
          if(
            (squares[a]=== "X" || squares[a] === "O") &&
             squares[a] === squares[b] && squares[a] === squares[c]
            ){
              console.log("Won");
            return squares[a];
          }
        }
      }  
}

  export default Game;