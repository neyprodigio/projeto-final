import { StyledPlayerList } from "./style";
import { PlayerContext } from "../../contexts/playersContext";
import { useContext, useEffect, useState } from "react";
import { TbUser } from "react-icons/tb";
import {GrUserAdd} from "react-icons/gr"
import { StyledBtn } from "./stylebtn";
import AddPlayer from "../addPlayer/AddPlayer";

const PlayerList = () => {
    const {openModal, isOpen} = useContext(PlayerContext)

    const [random, setRandom] = useState(0);
    useEffect(() => {
        function getRandom(min: any, max: any) {
            return parseInt(Math.random() * (max - min) + min);
        }
        setRandom(getRandom(1, 6));
    }, [random]);
 
    const { player, delPlayer } = useContext(PlayerContext);
    return (
        <>
            <StyledBtn onClick={()=>openModal()}> Adicionar Jogador <GrUserAdd /></StyledBtn>
            {isOpen === true && <AddPlayer/> }
            <StyledPlayerList>
                {player.map((player) => (
                    <li key={player.id}>
                        {/* <img src={} alt="avatar" /> */}
                        <h2>{player.name}</h2>
                        <TbUser />
                        {random === player.id ? <p>Goleiro</p> : <p>Linha</p>}
                        <button onClick={() => delPlayer(player.id)}>Remover</button>
                    </li>
                ))}
            </StyledPlayerList>
        </>
    );
};

export default PlayerList;
