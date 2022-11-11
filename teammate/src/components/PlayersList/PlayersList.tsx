import { StyledPlayerList } from "./style";
import { PlayerContext } from "../../contexts/playersContext";
import { useContext, useEffect, useState } from "react";
import { TbUser } from "react-icons/tb";
import { GrUserAdd } from "react-icons/gr";
import { StyledBtn } from "./stylebtn";
import { AiFillEdit } from "react-icons/ai";
import AddPlayer from "../addPlayer/AddPlayer";
import { StyledBtn2 } from "./styleBtn2";
import EditPlayer from "../editPlayer/EditPlayer";
import { motion } from "framer-motion";
const PlayerList = () => {
    const {
        openModal,
        openModal2,
        isOpen,
        Open,
        player,
        delPlayer,
        setEditId,
    } = useContext(PlayerContext);
    const [random, setRandom] = useState(0);
    useEffect(() => {
        function getRandom(min: any, max: any) {
            return parseInt(Math.random() * (max - min) + min);
        }
        setRandom(getRandom(1, 6));
    }, [random]);

    return (
        <>
            <StyledBtn onClick={() => openModal()}>
                {" "}
                Adicionar Jogador <GrUserAdd />
            </StyledBtn>
            {isOpen === true && <AddPlayer />}
            <StyledPlayerList>
                {player.map((player) => (
                    <motion.li
                        key={player.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            default: {
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001,
                            },
                        }}
                    >
                        <h2>{player.name}</h2>
                        <StyledBtn2
                            onClick={() => {
                                setEditId(player.id);
                                openModal2();
                            }}
                        >
                            <AiFillEdit />
                        </StyledBtn2>
                        {Open === true && <EditPlayer />}
                        <TbUser />
                        {random === player.id ? <p>Goleiro</p> : <p>Linha</p>}
                        <button onClick={() => delPlayer(player.id)}>
                            Remover
                        </button>
                    </motion.li>
                ))}
            </StyledPlayerList>
        </>
    );
};

export default PlayerList;
