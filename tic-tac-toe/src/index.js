import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    
    return (
        <button className="square" onClick={() => props.onClick()}>
          {props.player}
        </button>
      );

  }

function isWinner(squares, player) {
    const board = squares.map(x => x === player ? x : '');
    console.log("this is board ");
    console.log(board);
    for(let i = 0; i < board.length; i++){
        console.log("this is i -> " + i);
        if(board[i] === player){
        if(i === 0 || i === 1 || i === 2){
            // check for straight line
            console.log('entering loop');
            if(i === 0) {
                if(board[i] === board[i+1] && board[i+1] === board[i+2]){ 
                    console.log("success!!")
                    return true;
                }
            }
            // check downwards
            if(board[i] === board[i+3] && board[i+3] === board[i+6]){
                return true;
            }
            // diag
            if(i === 0 || i === 2) {
                if(i === 0){
                    if(board[i] === board[4] && board[4]  === board[8]){
                        return true;
                    }
                }
                if(i === 2){
                    if(board[i] === board[4] && board[4] === board[6]){
                        return true;
                    }
                }
            }

        } else{
            if(board[i] === board[i+1] && board[i+1] === board[i+2]){ // straight line
                return true;
            }
        }
    }
}

    return false;
}
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: false,
            status: '',
        }
    }

    handleClick_explicit(i){
        // copy of the arr
        const squares = this.state.squares.slice();
        // update the copy's ith index
        if (this.state.xIsNext){
            squares[i] = 'X';
            this.setState({xIsNext: false});
        } else{
            squares[i] = 'O';
            this.setState({xIsNext: true});
        }
        // set state from there
        this.setState({squares: squares});
    }

    handleClick(i){

        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares, 
            xIsNext: !this.state.xIsNext,
        })
        const curr = this.state.xIsNext ? 'O' : 'X';
        const winner = isWinner(this.state.squares, curr );
        this.setState({winner: winner});
        if(winner === false){
        // set state from there
        this.setState({
            status: 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'),
        });
    } else {
        this.setState({
            status: "Winner " + curr,
        })
    }
        
    }

    renderSquare(i) {
      return(
      <Square 
        player={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} 
        />
        );
    }
  
    render() {
      return (
        <div>
          <div className="status">{this.state.status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );  