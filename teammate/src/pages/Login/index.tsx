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
        <StyledForm onSubmit={handleSubmit(submit)}>
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
    );
};

export default Login;
