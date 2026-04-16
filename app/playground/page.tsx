'use client';
import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div >{status}</div>
        <div className="boardRow" >
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="boardRow">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="boardRow">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default function Game() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-2 px-10 sm:items-start">
        <Paper sx={{ p: 2, width: '100%', height: '100%' }}>

          <Grid container size={12}>
            <Grid container size={12} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5">Tic-Tac-Toe</Typography>
            </Grid>
            <Grid container className="game" size={12} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <div className="game-board">
                <Board />
              </div>
            </Grid>
            <Grid container size={12} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Button>
                Reset
              </Button>
            </Grid>
          </Grid>
          <div className="game">

            <div className="gameInfo">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>

        </Paper>
      </main>
    </div>

  );
}