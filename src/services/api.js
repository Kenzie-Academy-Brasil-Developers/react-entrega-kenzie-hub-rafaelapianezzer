import axios from "axios";
const apiURL = "https://kenziehub.herokuapp.com";

export const userRegisterApi = async (data) => {
    try {
     const response = await axios.post(apiURL + "/users", data, {
        headers: {"Content-Type": "application/json"}

       
    })
    return response 
    
    } catch (error){
        console.log(error)
    }

}

export const userLoginApi = async (data) => {
    try{
    const response = await axios.post(apiURL + "/sessions", data, {
        headers: {"Content-Type": "application/json"}
    })
    return response.data
} catch (error){
    console.log(error.response.data.message)
}
}
