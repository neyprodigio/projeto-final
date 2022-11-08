import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({} as Icontext);

interface Iplayers {
    name: string;
    userId: number;
    id: number;
}

interface Iprovider {
    children: ReactNode;
}

interface Icontext {
    player: Iplayers[];
    setPlayers: (values: any) => void;
    playersList: () => void;
}

export const PlayerProvider = ({ children }: Iprovider) => {
    const [player, setPlayers] = useState([]);
    const playersList = () => {
        api.get("/players")
            .then((res) => setPlayers(res.data))
            .catch((error) => console.log(error));
    };
    playersList();

    const delPlayer = async (id: number) => {
        await api.delete(`/players/${id}`).then().catch();
    };

    const editPlayer = async (id: number) => {
        await api.patch(`/player/${id}`).then().catch();
    };

    return (
        <AuthContext.Provider value={{ player, setPlayers, playersList }}>
            {children}
        </AuthContext.Provider>
    );
};
