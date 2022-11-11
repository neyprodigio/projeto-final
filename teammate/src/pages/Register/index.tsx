import {useForm} from 'react-hook-form'
import { AuthContext, Iregister } from '../../contexts/AuthContext';
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledInput } from "../../styles/input";
import {yupResolver} from '@hookform/resolvers/yup'
import { registerSchema } from './registerSchema';
import { StyledErrors } from '../../styles/errors';
import {useContext, useState} from 'react'

const Register = () => {
    const {userRegister} = useContext(AuthContext)
    const [load, setLoad] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<Iregister>({
        resolver: yupResolver(registerSchema)
    })

    const submit = async (data:Iregister) => {
        userRegister(data,setLoad)
    }
        
    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <h1>Registro</h1>
            <StyledInput type="text" placeholder="Digite seu nome" {...register("name")} />
            {errors.name &&  <StyledErrors>{errors.name.message}</StyledErrors>}
            <StyledInput type="email" placeholder="Digite seu Email" {...register("email")}/>
            {errors.email &&  <StyledErrors>{errors.email.message}</StyledErrors>}
            <StyledInput type="password" placeholder="Digite sua senha" {...register("password")}/>
            {errors.password &&  <StyledErrors>{errors.password.message}</StyledErrors>}
            <StyledButton type='submit' disabled={load} >{load? 'Registrando...' : 'Registrar'}</StyledButton>
        </StyledForm>
    );
};

export default Register;
