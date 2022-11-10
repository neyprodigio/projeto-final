import { StyledButton } from "../../styles/button";
import { StyledErrors } from "../../styles/errors";
import { StyledForm } from "../../styles/form";
import { StyledInput } from "../../styles/input";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useContext, useState} from "react"
import { loginSchema } from "./loginSchema";
import { Ilogin } from "../../contexts/AuthContext";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../contexts/playersContext";

const Login = () => {
    const {goRegister} = useContext(PlayerContext)
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm<Ilogin>({
        resolver: yupResolver(loginSchema)
    })

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const submit = async (data:Ilogin) => {
        try {
            setLoading(true)
            const response = await api.post('/login', data)
            setUser(response.data.user)
            console.log(response.data)         
            localStorage.setItem("@team-token", response.data.accessToken)
            localStorage.setItem("@team-user", JSON.stringify(response.data.user.id))
            navigate('/dashboard')
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>
            <StyledInput type="email" placeholder="Digite seu email" {...register("email")}/>
            {errors.email && <StyledErrors>{errors.email.message}</StyledErrors>}
            <StyledInput type="password" placeholder="Digite sua senha" {...register("password")}/>
            {errors.password &&  <StyledErrors>{errors.password.message}</StyledErrors>}

            <button onClick={() => goRegister()} className='go-register'>Fazer cadastro</button>
            <StyledButton type="submit" disabled={loading} >{loading? 'Entrando...' : 'Entrar'}</StyledButton>
        </StyledForm>
    );
};

export default Login;
