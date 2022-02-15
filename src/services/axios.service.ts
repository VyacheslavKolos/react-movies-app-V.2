import axios from "axios";

import baseURL from "../constants/urls";

export const axiosService = axios.create({
        baseURL,
        headers:
            {'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjg4NmZlMjZhMmNkMzNkY2Y1NDQyODM5ZWM0YzhmYSIsInN1YiI6IjYyMDNhOGJmZWEzN2UwMDExOWEyZGVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IKVHqvmmM236kR_MpqoDHEbF3C-2U3MCL3WtbcljcEs`}
    }
);