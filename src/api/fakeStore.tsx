import axios from "axios";

export const fakeStore = axios.create({
    baseURL: "https://fakestoreapi.com"
});