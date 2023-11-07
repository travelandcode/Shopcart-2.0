import Axios  from "axios";

export const api = Axios.create({
    baseURL: 'https://theshopcart-api.vercel.app',
    timeout: 15000
})