import { createContext, useState } from "react";

interface GameContextProps {
    squares: (null | string)[];
    isNext: boolean;
    setSquares: React.Dispatch<React.SetStateAction<(null | string)[]>>;
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameContext = createContext<GameContextProps | null>(null);

export const GameProvider = ({ children }) => {
    const [squares, setSquares] = useState<(null | string)[]>(Array.from({ length: 9 }, () => null));
    const [isNext, setIsNext] = useState(true);

    return (
        <GameContext.Provider value={{
            squares,
            isNext,
            setSquares,
            setIsNext
        }}>
            {children}
        </GameContext.Provider>
    )
};