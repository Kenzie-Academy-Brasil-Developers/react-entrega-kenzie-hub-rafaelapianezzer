import axios from "axios";
const apiURL = "https://kenziehub.herokuapp.com";

export const userRegisterApi = async (data) => {
    try {
        const response = await axios.post(apiURL + "/users", data, {
            headers: { "Content-Type": "application/json" }


        })
        return response

    } catch (error) {
        console.log(error)
    }

}

export const userLoginApi = async (data) => {
    try {
        const response = await axios.post(apiURL + "/sessions", data, {
            headers: { "Content-Type": "application/json" }
        })
        return response.data
    } catch (error) {
        console.log(error.response.data.message)
    }
}


export const createTechApi = async (data) => {
    try {
        const response = await axios.post(apiURL + "/users/techs", data, {
            headers: {
                 "Content-Type": "application/json" ,
                 "Authorization": `Bearer ${localStorage.getItem("token")}` 
                }
        })
        return response.data
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export const updateTechApi = async (id, data) => {
    try {
        const response = await axios.put(apiURL + `/users/techs/${id}`, data, {
            headers: {
                 "Content-Type": "application/json" ,
                 "Authorization": `Bearer ${localStorage.getItem("token")}` 
                }
        })
        return response.data
    } catch (error) {
        console.log(error.response.data.message)
    }
}


export const deleteTechApi = async (id) => {
    try {
        const response = await axios.delete(apiURL + `/users/techs/${id}`, {
            headers: {
                 "Content-Type": "application/json" ,
                 "Authorization": `Bearer ${localStorage.getItem("token")}` 
                }
        }) 
        return response.status === 204
    } catch (error) {
        console.log(error.response.data.message)
    }
}