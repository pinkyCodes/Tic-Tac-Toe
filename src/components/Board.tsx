import { useContext } from 'react';
import { GameContext, GameContextProps } from "../context/GameContext";
import { calculateWinner } from "../helpers/helpers";
import Square from "./Square";

const Board = () => {
    const { squares, setSquares, isNext, setIsNext } = useContext(GameContext) as GameContextProps;

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        isNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
        setSquares(nextSquares);
        setIsNext(!isNext);
    };

    return (
        <div id="board">
            {Array.from({ length: 9 }, (_, i) =>
                <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
            )}
        </div>
    );
};

export default Board;
