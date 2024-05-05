import { useState, useEffect } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { createCar } from "../../../../redux/actions/car";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getManufactures } from "../../../../redux/actions/manufacture";
import { getTypes } from "../../../../redux/actions/type";
import { getSizes } from "../../../../redux/actions/size";
import { getTransmissions } from "../../../../redux/actions/transmission";

export const CreateCarPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { manufactures } = useSelector((state) => state.manufacture);
    const { types } = useSelector((state) => state.type);
    const { sizes } = useSelector((state) => state.size);
    const { transmissions } = useSelector((state) => state.transmission);

    useEffect(() => {
        dispatch(getManufactures());
        dispatch(getTypes());
        dispatch(getSizes());
        dispatch(getTransmissions());
    }, []);

    const [name, setName] = useState("");
    const [plate, setPlate] = useState("");
    const [model, setModel] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [year, setYear] = useState("");
    const [available, setAvailable] = useState(false);
    const [manufacture, setManufacture] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [transmission, setTransmission] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // dispatch the create car action
        dispatch(
            createCar(
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
            )
        );
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Create Car</h2>
            </div>
            <Form onSubmit={onSubmit}>
                <FloatingLabel controlId="name" label="Name" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </FloatingLabel>

                <FloatingLabel controlId="plate" label="Plate" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Plate"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </FloatingLabel>

                <FloatingLabel controlId="model" label="Model" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </FloatingLabel>

                <FloatingLabel controlId="image" label="Image" className="mb-3">
                    <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
                </FloatingLabel>

                <FloatingLabel controlId="description" label="Description" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </FloatingLabel>

                <FloatingLabel controlId="rentPerDay" label="Rent per Day" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Rent per Day"
                        value={rentPerDay}
                        onChange={(e) => setRentPerDay(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </FloatingLabel>

                <FloatingLabel controlId="year" label="Year" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingSelectAvailable"
                    label="Available"
                    className="mb-3"
                >
                    <Form.Select
                        aria-label="Select Available for this car"
                        value={available}
                        onChange={(e) => setAvailable(e.target.value)}
                    >
                        <option>Select Available</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingSelectManufacture"
                    label="Manufacture"
                    className="mb-3"
                >
                    <Form.Select
                        aria-label="Select Manufacture for this car"
                        value={manufacture}
                        onChange={(e) => setManufacture(e.target.value)}
                    >
                        <option>Select Manufacture</option>
                        {manufactures.map((manufacture) => (
                            <option key={manufacture?.id} value={manufacture?.id}>
                                {manufacture?.name}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectType" label="Type" className="mb-3">
                    <Form.Select
                        aria-label="Select Type for this car"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option>Select Type</option>
                        {types.map((type) => (
                            <option key={type?.id} value={type?.id}>
                                {type?.name}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectSize" label="Size" className="mb-3">
                    <Form.Select
                        aria-label="Select Size for this car"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option>Select Size</option>
                        {sizes.map((size) => (
                            <option key={size?.id} value={size?.id}>
                                {size?.name}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingSelectTransmission"
                    label="Transmission"
                    className="mb-3"
                >
                    <Form.Select
                        aria-label="Select Transmission for this car"
                        value={transmission}
                        onChange={(e) => setTransmission(e.target.value)}
                    >
                        <option>Select Transmission</option>
                        {transmissions.map((transmission) => (
                            <option key={transmission?.id} value={transmission?.id}>
                                {transmission?.name}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>

                <Button variant="primary" type="submit" className="mb-3" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create"}
                </Button>
            </Form>
        </>
    );
};
