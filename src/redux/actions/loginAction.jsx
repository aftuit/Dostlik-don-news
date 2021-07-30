
import axios from "axios"
import { toast } from "react-toastify";
import { API_PATH, TOKEN_NAME } from "../../tools/constants";

export function updateLoader (data){
    return {
        type: 'load',
        payload: data,
    }
}

export function login(event, errors, values, history){
    return function (dispatch) {
        dispatch(updateLoader({isLoading: true}))
        axios.post( API_PATH + "auth/login", values)
        .then(res =>  {
               
            localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);

            dispatch(updateLoader({isLoading: false}))

            history.push("/admin/menu")
        })

        .catch((error) => {
            toast.error(error.response.data.message);
        })
    
    }
}