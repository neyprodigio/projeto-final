import { createContext, ReactNode, useState } from "react";
import api from "../services/api";


export const AuthContext = createContext({} as Icontext)

interface Icontext {
    user: Ilogin
}
interface Iprovider {
    children: ReactNode
}

interface Ilogin {
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

    const login = async ({email, password}:Ilogin)  =>  {
       await api.post('/login',{
        email:email,
        password:password
       })
       .then(res => res.data)
       .catch(error => console.log(error))
    }

    const register = async ({email,password, name}:Iregister) => {
        api.post('register',{
            email: email,
            password: password,
            name: name
        })
        .then(res => res.data)
        .catch(error => console.log(error))
    }

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}