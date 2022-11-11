import { StyledPlayerList } from "./style";
import { PlayerContext } from "../../contexts/playersContext";
import { useContext, useEffect, useState } from "react";
import { TbUser } from "react-icons/tb";
import {GrUserAdd} from "react-icons/gr"
import { StyledBtn } from "./stylebtn";
import {AiFillEdit} from "react-icons/ai"
import AddPlayer from "../addPlayer/AddPlayer";
import { StyledBtn2 } from "./styleBtn2";
import EditPlayer from "../editPlayer/EditPlayer";

const PlayerList = () => {
    const {openModal, openModal2 ,isOpen, Open, player, delPlayer} = useContext(PlayerContext)
    const [random, setRandom] = useState(0);
    useEffect(() => {
        function getRandom(min: any, max: any) {
            return parseInt(Math.random() * (max - min) + min);
        }
        setRandom(getRandom(1, 6));
    }, [random]);
 

    return (
        <>
            <StyledBtn onClick={()=>openModal()}> Adicionar Jogador <GrUserAdd /></StyledBtn>
            {isOpen === true && <AddPlayer/> }
            <StyledPlayerList>
                {player.map((player) => (
                    <li key={player.id}>
                        {/* <img src={} alt="avatar" /> */}

                        <h2>{player.name}</h2>
                        <StyledBtn2 onClick={() => openModal2()}><AiFillEdit/></StyledBtn2>
                        {Open === true && <EditPlayer/>}
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
