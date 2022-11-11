import { StyledButton } from "../../styles/button";
import { StyledErrors } from "../../styles/errors";
import { StyledForm } from "../../styles/form";
import { StyledInput } from "../../styles/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { loginSchema } from "./loginSchema";
import { AuthContext, Ilogin } from "../../contexts/AuthContext";
import { PlayerContext } from "../../contexts/playersContext";
import {motion} from 'framer-motion'
import Lottie from "lottie-react";
import frango from '../../assets/frango.json'

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const { goRegister } = useContext(PlayerContext);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Ilogin>({
        resolver: yupResolver(loginSchema),
    });

    const submit = async (data: Ilogin) => {
        userLogin(data, setLoading);
    };

    return (
        <motion.div
        initial={{x:2000}}
        animate={{x:0}}
        transition={{duration:1}}
        style={{width:'100vw', height:'100%'}}
        >
            <StyledForm onSubmit={handleSubmit(submit)}>
            <Lottie className="frango" animationData={frango}></Lottie>
            <h1>Login</h1>
            <StyledInput
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
            />
            {errors.email && (
                <StyledErrors>{errors.email.message}</StyledErrors>
            )}
            <StyledInput
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
            />
            {errors.password && (
                <StyledErrors>{errors.password.message}</StyledErrors>
            )}

            <button onClick={() => goRegister()} className="go-register">
                Fazer cadastro
            </button>
            <StyledButton type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
            </StyledButton>
        </StyledForm>
        </motion.div>
    );
};

export default Login;
