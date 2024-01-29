import { ReactNode, createContext, useState } from "react";

export interface GameContextProps {
    squares: (null | string)[];
    isNext: boolean;
    setSquares: React.Dispatch<React.SetStateAction<(null | string)[]>>;
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameContext = createContext<GameContextProps | null>(null);

export interface GameProviderProps {
    children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
    const [squares, setSquares] = useState<(null | string)[]>(Array.from({ length: 9 }, () => null));
    const [isNext, setIsNext] = useState(true);

    return (
        <GameContext.Provider value={{
            squares,
            setSquares,
            isNext,
            setIsNext
        }}>
            {children}
        </GameContext.Provider>
    )
};