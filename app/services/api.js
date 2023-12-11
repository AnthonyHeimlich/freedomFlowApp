import axios from "axios"

//  https://freedomflowapi.onrender.com/accounts

const Api = axios.create({
    baseURL: "https://freedomflowapi.onrender.com/"
})

export default Api