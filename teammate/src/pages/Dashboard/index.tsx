import { useContext } from "react";
import AddPlayer from "../../components/addPlayer/AddPlayer";
import Header from "../../components/header/Header";
import PlayerList from "../../components/PlayersList/PlayersList";
import { PlayerContext } from "../../contexts/playersContext";

const Dashboard = () => {
    const {token, navigate } = useContext(PlayerContext);

    return (
        <>
            {token ? (
                <>
                    <Header />
                    <PlayerList />
                </>
            ) : (
                navigate("/")
            )}
        </>
    );
};

export default Dashboard;
