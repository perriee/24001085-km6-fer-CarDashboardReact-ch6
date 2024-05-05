import { useState, useEffect } from "react";
import { Button, FloatingLabel, Form, Image } from "react-bootstrap";
import { updateCar } from "../../../../redux/actions/car";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCarDetail } from "../../../../redux/actions/car";

export const UpdateCarPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { carDetail, loading } = useSelector((state) => state.car);
    console.log("🚀 ~ UpdateCarPage ~ carDetail:", carDetail);
    console.log("MANUFACTURE:", carDetail?.Manufacture?.name);

    const [name, setName] = useState(carDetail?.name);
    const [plate, setPlate] = useState(carDetail?.plate);
    const [model, setModel] = useState(carDetail?.model);
    const [image, setImage] = useState(carDetail?.image);
    const [newImage, setNewImage] = useState(null);
    const [description, setDescription] = useState(carDetail?.description);
    const [rentPerDay, setRentPerDay] = useState(carDetail?.rentPerDay);
    const [year, setYear] = useState(carDetail?.year);
    const [available, setAvailable] = useState(carDetail?.available);
    const [manufacture, setManufacture] = useState(carDetail?.Manufacture?.id);
    const [type, setType] = useState(carDetail?.Type?.id);
    const [size, setSize] = useState(carDetail?.Size?.id);
    const [transmission, setTransmission] = useState(carDetail?.Transmission?.id);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // get detail car
        dispatch(getCarDetail(navigate, id));
    }, [id, dispatch, navigate]);

    useEffect(() => {
        if (carDetail) {
            setName(carDetail?.name);
            setPlate(carDetail?.plate);
            setModel(carDetail?.model);
            setImage(carDetail?.image);
            setDescription(carDetail?.description);
            setRentPerDay(carDetail?.rentPerDay);
            setYear(carDetail?.year);
            setAvailable(carDetail?.available);
            setManufacture(carDetail?.Manufacture?.id);
            setType(carDetail?.Type?.id);
            setSize(carDetail?.Size?.id);
            setTransmission(carDetail?.Transmission?.id);
        }
    }, [carDetail]);

    const handleImageChange = (e) => {
        // Perbarui URL gambar baru saat gambar dipilih
        setNewImage(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0])); // Update URL gambar yang ditampilkan di atas
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // dispatch the create car action
        dispatch(
            updateCar(
                navigate,
                id,
                name,
                plate,
                model,
                newImage,
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
                <h2>Update Car</h2>
            </div>
            <Form onSubmit={onSubmit}>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <Image
                            src={image}
                            fluid
                            rounded
                            style={{ height: 300, width: 300 }}
                            className="mb-3"
                        />

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
                            <Form.Control type="file" onChange={handleImageChange} />
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
                                <option value={1}>Toyota</option>
                                <option value={2}>Daihatsu</option>
                                <option value={5}>Tesla</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingSelectType" label="Type" className="mb-3">
                            <Form.Select
                                aria-label="Select Type for this car"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option>Select Type</option>
                                <option value="1">Sedan</option>
                                <option value="2">Minibus</option>
                                <option value="3">Pickup</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingSelectSize" label="Size" className="mb-3">
                            <Form.Select
                                aria-label="Select Size for this car"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            >
                                <option>Select Size</option>
                                <option value="1">Small</option>
                                <option value="2">Medium</option>
                                <option value="3">Large</option>
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
                                <option value="1">Matic</option>
                                <option value="2">Manual</option>
                                <option value="3">Automatic</option>
                            </Form.Select>
                        </FloatingLabel>

                        <Button
                            variant="primary"
                            type="submit"
                            className="mb-3"
                            disabled={isLoading}
                        >
                            {isLoading ? "Updating..." : "Update"}
                        </Button>
                    </>
                )}
            </Form>
        </>
    );
};
