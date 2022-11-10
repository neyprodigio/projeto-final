import { useContext } from "react"
import AddPlayer from "../../components/addPlayer/AddPlayer"
import Header from "../../components/header"
import PlayerList from "../../components/PlayersList"
import { PlayerContext } from "../../contexts/playersContext"

const Dashboard = () => {
    const {isOpen} = useContext(PlayerContext)
    
    return(
        <>
        <Header />
        <PlayerList />
        </>
    )
}

export default Dashboard