export interface SquareProps {
    value: null | string;
    onSquareClick: (i: number) => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {

    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};

export default Square;
