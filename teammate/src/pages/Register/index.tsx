import {useForm} from 'react-hook-form'
import { Iregister } from '../../contexts/AuthContext';
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledInput } from "../../styles/input";
import {yupResolver} from '@hookform/resolvers/yup'
import { registerSchema } from './registerSchema';
import { StyledErrors } from '../../styles/errors';
import {useState} from 'react'
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [load, setLoad] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<Iregister>({
        resolver: yupResolver(registerSchema)
    })

    const navigate = useNavigate()

    const submit = async (data:Iregister) => {
        try {
            setLoad(true)
            const response = await api.post('/register', data)
            console.log(response.data)
            navigate('/')
        } catch (error) {
            console.log(error)
        } finally{
            setLoad(false)
        }
 
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
