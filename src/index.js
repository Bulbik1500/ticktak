import React from 'react';
import ReatDOM, { render } from 'react-dom';

class Square extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={() => this.props.handleSquareClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const rowStartIndexes = [0, 3, 6];
        const squares = Array(3).fill(null);
    
        return rowStartIndexes.map((rowStartIndex, arrIndex) => {
            let squareIndex = rowStartIndexes + placeHolderIndex;
        });
    }
}