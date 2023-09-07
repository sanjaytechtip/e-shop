import { useState, useEffect } from "react";
import { useAuth } from "../../component/context/auth";
import axios from "axios";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false)
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async()=>{
            const res = await axios.post('users/15');
            if(res.data.status){
                setOk(true)
            }else{
                //console.log(res);
                setOk(false)
            }
        }
        if(auth?.token) authCheck()
     }, [auth?.token])
    return ok;
}