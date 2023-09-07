import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });
//default axios
//console.log('Brearer '+auth?.token); //return false;
axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`


    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            //console.log(parseData)
            setAuth({
                ...auth,
                user: parseData,
                token: parseData.token
            });
        }
        //eslint-disable-next-line
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider }