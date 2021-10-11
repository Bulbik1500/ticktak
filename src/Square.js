import React from "react";
import ReactDOM from "react-dom";

class Square extends React.Component{
    constructor(props){
      super(props);
    }
  
    render(){
        return(
          <>
            <button className="grit-item" onClick={() => {this.props.onClick();
            }}>
              {this.props.value || <div>&nbsp;</div>}
              </button> 
          </>
        );
    }
}

export default Square;
