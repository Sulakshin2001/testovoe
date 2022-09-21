import axios from "axios";

export const instance = axios.create({
    baseURL:'https://api-moscow-mba.herokuapp.com',
    withCredentials: true
})

export const getPrograms = {
    getPrograms(){
        return instance.get('/products')
    }
}