/* eslint-disable no-sequences */
import { StyledButton } from "../../styles/button"
import { StyledInput } from "../../styles/input"
import { StyledAddForm } from "./style"
import {FaRegWindowClose} from 'react-icons/fa'
import { useContext} from "react"
import { PlayerContext } from "../../contexts/playersContext"
import { useForm } from "react-hook-form"


const AddPlayer = () => {
    const {openModal, createPlayer} = useContext(PlayerContext)
    
    const {register, handleSubmit, formState: {errors}} = useForm<Idata>({})
    
    interface Idata {
        name: string
        userIdd: number
    }
  
    const submit = (data:Idata) => {
        createPlayer(data.name)
    }
    
    return(
        <StyledAddForm onSubmit={handleSubmit(submit)}>
            <button type="button" onClick={() => openModal()}><FaRegWindowClose/></button>
            <h1>Cadastre um jogador</h1>
            <StyledInput placeholder="Digite o nome do jogador" type='text' id="name" {...register('name')}/>
            <StyledButton type="submit">Cadastrar</StyledButton>
        </StyledAddForm>
    )
}

export default AddPlayer