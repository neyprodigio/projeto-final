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
    editPlayer: (name: string, id: number) => void;
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
}

export const PlayerProvider = ({ children }: Iprovider) => {
    const [player, setPlayers] = useState([]);
    useEffect(() => {
        api.get("/players")
            .then((res) => setPlayers(res.data))
            .catch((error) => console.log(error));
    }, [player]);

    const userIdd = localStorage.getItem("@team-user");
    const token = localStorage.getItem("@team-token");
    const delPlayer = async (id: number): Promise<void> => {
        try {
            const response = await api.delete(`/players/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return console.log(response);
        } catch (response_1) {
            return console.log(response_1);
        }
    };

    const createPlayer = async (name: String): Promise<void | any> => {
        axios
            .post(
                "https://api-footv5.herokuapp.com/players",
                {
                    name: name,
                    userId: userIdd,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => openModal());
    };

    const editPlayer = async (name: String, id: number): Promise<void | any> => {
        console.log(userIdd)
        api.patch(
            `/players/${id}`,
            {
                name: name,
                userId: userIdd,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => openModal2());
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
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
