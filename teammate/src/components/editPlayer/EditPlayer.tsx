import { useContext } from "react";
import { PlayerContext } from "../../contexts/playersContext";
import { StyledButton } from "../../styles/button";
import { StyledInput } from "../../styles/input";
import { StyledAddForm } from "../addPlayer/style";
import { FaRegWindowClose } from "react-icons/fa";
import { useForm } from "react-hook-form";

const EditPlayer = () => {
    const { openModal, editPlayer, openModal2 } = useContext(PlayerContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Idata>({});
    interface Idata {
        name: string;
        id: number;
    }

    const submit = (data: Idata) => {
        console.log(data);
        editPlayer(data.name, data.id);
    };
    return (
        <StyledAddForm onSubmit={handleSubmit(submit)}>
            <button type="button" onClick={() => openModal2()}>
                <FaRegWindowClose />
            </button>
            <h1>Editar nome</h1>
            <StyledInput
                placeholder="Alterar nome"
                type="text"
                id="name"
                {...register("name")}
            />
            <StyledButton type="submit">Editar</StyledButton>
        </StyledAddForm>
    );
};

export default EditPlayer;
