import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../services/api";

export const PlayerContext = createContext({} as Icontext);

export interface Iplayers {
    name: string;
    userId: number;
    id: number;
}

interface Iprovider {
    children: ReactNode;
}

interface Icontext {
    delPlayer: (value: number) => void;
    createPlayer: (name: string) => void;
    editPlayer: (name: string) => void;
    player: Iplayers[];
    setPlayers: (values: any) => void;
    exit: () => void;
    openModal: () => void;
    openModal2: () => void;
    isOpen: boolean;
    Open: boolean;
    token: string | null;
    navigate: NavigateFunction;
    goRegister: () => void;
    editId: number
    setEditId: (value:number) => void
}

export const PlayerProvider = ({ children }: Iprovider) => {
    const [player, setPlayers] = useState([]);
    const [editId, setEditId] = useState(0) 
    useEffect(() => {
        api.get("/players")
            .then((res) => setPlayers(res.data))
            .catch((error) => console.log(error));
    }, [player]);

    const userIdd = localStorage.getItem("@team-user");
    const token = localStorage.getItem("@team-token");
    const delPlayer = async (id: number): Promise<void> => {
        try {
            await api.delete(`/players/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
        
            });
            console.log(`Jogador com id ${id} foi deletado com sucesso`);
        } catch (error) {
            console.error(error);
        }
    };

    const createPlayer = async (name: String): Promise<void | any> => {
        try {
            const response = await axios.post(
                "https://footapi.onrender.com/players",
                {
                    name,
                    userId: userIdd,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            openModal();
        } catch (error) {
            console.error(error);
        }
    };
    

    const editPlayer = async (name: String): Promise<void | any> => {
        try {
            const response = await axios.patch(
                `https://footapi.onrender.com/players/${editId}`,
                {
                    name,
                    userId: userIdd,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            openModal2();
        } catch (error) {
            console.error(error);
        }
    };
    

    const navigate = useNavigate();
    const exit = (): void => {
        localStorage.clear();
        navigate("/");
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [Open, setOpen] = useState<boolean>(false);
    const openModal = (): void => {
        setIsOpen(!isOpen);
    };
    const openModal2 = (): void => {
        setOpen(!Open);
    };

    const goRegister = (): void => {
        return navigate("/register", { replace: true });
    };

    return (
        <PlayerContext.Provider
            value={{
                player,
                setPlayers,
                delPlayer,
                exit,
                openModal,
                openModal2,
                isOpen,
                Open,
                editPlayer,
                createPlayer,
                token,
                navigate,
                goRegister,
                editId,
                setEditId
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
