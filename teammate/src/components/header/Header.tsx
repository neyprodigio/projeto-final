import { StyledHeader } from "./style";
import { ImExit } from "react-icons/im";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/playersContext";

const Header = () => {
    const { exit } = useContext(PlayerContext);
    return (
        <StyledHeader>
            <h1>
                Team <span>App</span>
            </h1>
            <button onClick={() => exit()}>
                Sair
                <ImExit />
            </button>
        </StyledHeader>
    );
};

export default Header;
