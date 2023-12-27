import axios from "axios";

const endpoint = "https://qtify-backend-labs.crio.do"

export const fetchAlbumsTop = async () => {
    try {
       const res = axios.get(endpoint + "/albums/top") 
       return (await res).data
    } catch (error) {
        console.log(error);
    }
}

export const fetchAlbumsNew = async () => {
    try {
       const res = axios.get(endpoint + "/albums/new") 
       return (await res).data
    } catch (error) {
        console.log(error);
    }
}

export const fetchSongs = async () => {
    try {
       const res = axios.get(endpoint + "/songs") 
       return (await res).data
    } catch (error) {
        console.log(error);
    }
}

export const fetchFilters = async () => {
    try {
       const res = axios.get(endpoint + "/genres") 
       return (await res).data
    } catch (error) {
        console.log(error);
    }
}