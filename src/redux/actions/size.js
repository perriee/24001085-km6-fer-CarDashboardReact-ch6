import axios from "axios";
import { setSizes } from "../reducers/size";
import { toast } from "react-toastify";

export const getSizes = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/sizes`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setSizes(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};
