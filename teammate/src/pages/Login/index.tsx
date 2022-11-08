import { StyledButton } from "../../styles/button"
import { StyledForm } from "../../styles/form"
import { StyledInput } from "../../styles/input"

const Login = () => {
    return(
        <StyledForm action="">
            <h1>Login</h1>
            <StyledInput type="email" placeholder="Digite seu email" />
            <StyledInput type="password" placeholder="Digite sua senha"/>
            <StyledButton>Entrar</StyledButton>
        </StyledForm>
    )
}

export default Login