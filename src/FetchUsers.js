import axios from "axios"
import { useState, useEffect } from "react";

export const FetchUsers =() =>{  
    const [authorizedUser, setauthorizedUser] = useState({});
    const [authorizedId, setAuthorizedId] = useState(null);

    const env = import.meta.env;
    const URL = env.VITE_REACT_SERVER_URL

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const {data} = await axios.get(`${URL}/users`);
                    await data.filter((user)=> authorizedId === user._id ? setauthorizedUser(user):null)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    });

    useEffect(() => {
        setAuthorizedId(sessionStorage.getItem('userId'))
    },[]);

    return {
        authorizedUser,
        authorizedId,
    }
}