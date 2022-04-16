import axios from "axios";

import baseURL from "../constants/urls";

export const axiosService = axios.create({
        baseURL,
        headers:
            {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    }
);