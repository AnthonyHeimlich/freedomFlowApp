import axios from "axios"

//  https://type.fit/api/quotes
//  https://zenquotes.io/api/quotes/change

const PhrasesApi = axios.create({
    baseURL: "https://zenquotes.io/api/"
})

export default PhrasesApi