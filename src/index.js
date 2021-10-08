import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game.js"


class App extends React.Component {
  render(){
    return(
      <>
      <Game /> 
      </>
    );
  }
}




ReactDOM.render( <App />, document.getElementById("root"));