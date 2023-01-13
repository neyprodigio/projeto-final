import { PlayerContext } from "../../contexts/playersContext";
import { useContext, useEffect, useState } from "react";
import { TbUser } from "react-icons/tb";
import { GrUserAdd } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import AddPlayer from "../addPlayer/AddPlayer";
import EditPlayer from "../editPlayer/EditPlayer";
import { motion } from "framer-motion";
import "./newStyle.css";
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
        function getRandom(min: number, max: number) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        setRandom(getRandom(1, 6));
    }, [random]);

    return (
        <>
            <button className="add-player-btn" onClick={() => openModal()}>
                Adicionar Jogador <GrUserAdd />
            </button>
            {isOpen === true && <AddPlayer />}
            <ul className="player-list">
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
                        <h2 className="player-name">{player.name}</h2>
                        <button
                            className="edit-player-btn"
                            onClick={() => {
                                setEditId(player.id);
                                openModal2();
                            }}
                        >
                            <AiFillEdit />
                        </button>
                        {Open === true && <EditPlayer />}
                        <TbUser />
                        {random === player.id ? (
                            <p className="goalkeeper">Goleiro</p>
                        ) : (
                            <p className="line-player">Linha</p>
                        )}
                        <button
                            className="remove-player-btn"
                            onClick={() => delPlayer(player.id)}
                        >
                            Remover
                        </button>
                    </motion.li>
                ))}
            </ul>
        </>
    );
};

export default PlayerList;
