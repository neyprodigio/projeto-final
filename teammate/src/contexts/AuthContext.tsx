import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


export const AuthContext = createContext({} as Icontext)
interface Icontext {
    userLogin: (data:Ilogin, setLoading:(value: React.SetStateAction<boolean>) => void) => void
    userRegister: (data:Iregister, setload:(value: React.SetStateAction<boolean>) => void) => void
}
interface Iprovider {
    children: ReactNode
}

export interface Ilogin {
    email: string
    password: string
}

export interface Iregister {
    name: string
    email: string
    password: string
}

export const AuthProvider = ({children}:Iprovider) => {
    const [user, setUser] = useState<Ilogin>({email:'', password:''})
    const navigate = useNavigate()

    const userLogin = async (data:Ilogin, setLoading:(value: React.SetStateAction<boolean>) => void)  =>  {
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

    const userRegister = async (data:Iregister, setLoad:(value: React.SetStateAction<boolean>) => void) => {
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

    return(
        <AuthContext.Provider value={{ userLogin, userRegister}}>
            {children}
        </AuthContext.Provider>
    )
}