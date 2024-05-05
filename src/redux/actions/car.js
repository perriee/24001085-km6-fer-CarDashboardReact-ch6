import axios from "axios";
import { toast } from "react-toastify";
import { setCarDetail, setCars, setLoading } from "../reducers/car";

export const getCars = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCars(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getCarDetail = (navigate, id) => async (dispatch, getState) => {
    const { token } = getState().auth;

    // set loading state to true
    dispatch(setLoading(true));

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCarDetail(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
        navigate("/");
    }

    // set loading state to false when data is loaded
    dispatch(setLoading(false));
};

export const createCar =
    (
        navigate,
        name,
        plate,
        model,
        image,
        description,
        rentPerDay,
        year,
        available,
        manufacture,
        type,
        size,
        transmission,
        setIsLoading
    ) =>
    async (_, getState) => {
        const { token } = getState().auth;

        // make loading
        setIsLoading(true);

        let data = new FormData();
        data.append("name", name);
        data.append("plate", plate);
        data.append("model", model);
        data.append("image", image);
        data.append("description", description);
        data.append("rentPerDay", rentPerDay);
        data.append("year", year);
        data.append("available", available);
        data.append("manufacture_id", manufacture);
        data.append("type_id", type);
        data.append("size_id", size);
        data.append("transmission_id", transmission);

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response;
            toast.success(data.message);
            navigate("/dashboard/cars");
        } catch (error) {
            console.log(error);
            toast.error(error?.message);
        }

        setIsLoading(false);
    };

export const updateCar =
    (
        navigate,
        id,
        name,
        plate,
        model,
        image,
        description,
        rentPerDay,
        year,
        available,
        manufacture,
        type,
        size,
        transmission,
        setIsLoading
    ) =>
    async (_, getState) => {
        const { token } = getState().auth;

        // make loading
        setIsLoading(true);

        let data = new FormData();
        data.append("name", name);
        data.append("plate", plate);
        data.append("model", model);
        data.append("image", image);
        data.append("description", description);
        data.append("rentPerDay", rentPerDay);
        data.append("year", year);
        data.append("available", available);
        data.append("manufacture_id", manufacture);
        data.append("type_id", type);
        data.append("size_id", size);
        data.append("transmission_id", transmission);

        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response;
            toast.success(data?.message);
            navigate("/dashboard/cars");
        } catch (error) {
            console.log(error);
            toast.error(error?.message);
        }

        setIsLoading(false);
    };

export const deleteCar = (id) => async (_, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        await axios.request(config);
        toast.success("Successfully deleted car");
    } catch (error) {
        console.log(error);
    }
};
