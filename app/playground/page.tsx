'use client';
import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';

function calculateWinner(squares: string[]) {
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

type SquareProps = {
  value: string;
  onClick: ()=> void;
};
const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}

const Board: React.FC = () => {

  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div >{status}</div>
      <div className="boardRow" >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

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