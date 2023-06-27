import { HOST } from "../config/config";
import axios from "axios";
export const signUser = async ({ email, password }) => {
    /* return axios.post(`${HOST}/auth/signin`, { email, password }); */
    const res = await axios.post(`${HOST}/auth/signin`, { email, password });
    return res.data;
};

export const signUpUser = ({
    name,
    lastname,
    email,
    password,
    address,
    phone,
}) => {
    return axios.post(`${HOST}/auth/signup`, {
        name,
        lastname,
        email,
        password,
        address,
        phone,
    });
};
