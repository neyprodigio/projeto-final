import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./contexts/playersContext";
import RoutesMain from "./routes";

function App() {
    const { player } = useContext(AuthContext);

    return (
        
        <RoutesMain />
    ) 
}

export default App;
