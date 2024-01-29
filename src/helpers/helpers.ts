export const calculateWinner = (squares: (string | null)[]) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // winner
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    // draw
    if (squares.every((el) => el !== null)) return "Draw";

    // continue game
    return null;
};

export const determineStatus = (squares: (string | null)[], isNext: boolean) => {
    const winner = calculateWinner(squares);
    let status = "";

    switch (winner) {
        case null:
            status = `Next move -> ${isNext ? "X" : "O"}`;
            break;
        case "Draw":
            status = "The game is a draw!";
            break;
        case "X":
            status = "The winner is X!";
            break;
        case "O":
            status = "The winner is O!";
            break;
        default:
            break;
    }

    return status;
};
