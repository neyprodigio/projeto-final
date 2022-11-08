import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    email: yup.string().required('Este campo é obrigatório').email("Insira um email válido"),
    password: yup.string().required('Este campo é obrigatorio')
})