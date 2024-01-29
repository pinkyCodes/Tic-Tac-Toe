import { useState } from "react";
import Square from "./components/Square";
import { calculateWinner, determineStatus } from "./helpers/helpers";

const App = () => {
    const [isNext, setIsNext] = useState(true);
    const [squares, setSquares] = useState<(null | string)[]>(Array.from({ length: 9 }, () => null));

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        isNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
        setSquares(nextSquares);
        setIsNext(!isNext);
    };

    const status = determineStatus(squares, isNext);

    return (
        <main>
            <h1>Tic Tac Toe</h1>
            <div id="status">{status}</div>
            <div id="board">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </main>
    )
};

export default App;
