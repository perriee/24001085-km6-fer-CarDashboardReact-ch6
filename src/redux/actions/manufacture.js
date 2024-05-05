import axios from "axios";
import { setManufactures } from "../reducers/manufacture";
import { toast } from "react-toastify";

export const getManufactures = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/manufactures`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setManufactures(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const createManufacture = (navigate, name, setIsLoading) => async (_, getState) => {
    const { token } = getState().auth;

    // make loading
    setIsLoading(true);

    let data = new FormData();
    data.append("name", name);

    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/manufactures`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data,
    };

    try {
        const response = await axios.request(config);
        const { data } = response;
        toast.success(data.message);
        navigate("/dashboard/manufactures");
    } catch (error) {
        console.log(error);
        toast.error(error?.message);
    }

    setIsLoading(false);
};
