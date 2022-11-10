import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    editPlayer: (name: string, userIdd: number) => void;
    player: Iplayers[];
    setPlayers: (values: any) => void;
    playersList: () => void;
    exit: () => void;
    openModal: () => void;
    isOpen: boolean;
}

export const PlayerProvider = ({ children }: Iprovider) => {
    const [player, setPlayers] = useState([]);
    const playersList = () => {
        api.get("/players")
            .then((res) => setPlayers(res.data))
            .catch((error) => console.log(error));
    };

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
        // try {
        //     const userIdd = localStorage.getItem("@team-user");
        //     console.log(userIdd);
        //     const response = await api.post(`/players`, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${token}`,
        //         },
        //         name: name,
        //         userId: userIdd,
        //     });
        //     console.log(response);
        //     return response;
        // } catch (error) {
        //     console.log(error);
        // }

        axios.post(
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
        ).then(res => console.log(res))
    };

    const editPlayer = async (
        name: String,
        id: number
    ): Promise<void | any> => {
        try {
            const response = await api.patch(`/players`, {
                headers: { Authorization: `Bearer ${token}` },
                name: name,
                id: id,
            });
            console.log(response);
            return response;
        } catch (response_1) {
            return console.log(response_1);
        }
    };

    const navigate = useNavigate();
    const exit = (): void => {
        localStorage.clear();
        navigate("/");
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModal = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <PlayerContext.Provider
            value={{
                player,
                setPlayers,
                playersList,
                delPlayer,
                exit,
                openModal,
                isOpen,
                editPlayer,
                createPlayer,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
