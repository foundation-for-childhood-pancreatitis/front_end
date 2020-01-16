import axios from 'axios'

export function getToken() {
    return localStorage.getItem("token");
}

export default function() {
    return axios.create({
        baseURL: "server.harley-enterprises.me:5000",
        headers: {
            Authorization: getToken(),
        },
    })
}