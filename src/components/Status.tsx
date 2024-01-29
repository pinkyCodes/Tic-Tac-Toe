import { useContext } from "react";
import { GameContext, GameContextProps } from "../context/GameContext";
import { determineStatus } from "../helpers/helpers";

const Status = () => {
    const { squares, isNext } = useContext(GameContext) as GameContextProps;
    const status = determineStatus(squares, isNext);

    return <div id="status">{status}</div>
};

export default Status;
