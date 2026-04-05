import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    const getMe = async()=>{
        try {
            setLoading(true)
            let res = await fetch("http://localhost:9000/api/user/getMe",{
                method: "GET",
                credentials: "include"
            })

            if(res.ok){
                setLoading(false)
                res = await res.json()
                console.log(res.user);                
                setUser(res.user)
                setIsError(false)
            }
        } catch (error) {
            console.log(error);
            setIsError(true)
        }
    }
    useEffect(()=>{
        getMe()
    },[])



    return (
        <AuthContext.Provider value={{user, setUser, loading, isError}}>
            {children}
        </AuthContext.Provider>
    )
}