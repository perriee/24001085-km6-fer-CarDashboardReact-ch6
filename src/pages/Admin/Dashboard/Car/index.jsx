import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCar, getCars } from "../../../../redux/actions/car";
import DeleteConfirmationModal from "../../../../components/Modal/DeleteConfirmation";

export const CarPage = () => {
    const dispatch = useDispatch();
    const { cars, loading } = useSelector((state) => state.car);

    useEffect(() => {
        window.scrollTo({ top: 0 }); // Scroll to top on mount
    }, []);

    useEffect(() => {
        dispatch(getCars());
    }, [cars, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCar(id));
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Cars</h2>
                <Button variant="primary" as={Link} to={"/dashboard/cars/create"}>
                    Create Car
                </Button>
            </div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent/Day</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr key={car.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={car?.image}
                                        alt="Car Image"
                                        style={{ height: 100, width: 100 }}
                                    />
                                </td>
                                <td>{car?.name}</td>
                                <td>{car?.Type?.name}</td>
                                <td>
                                    {car?.rentPerDay?.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button variant="success" as={Link} to={`/car/${car?.id}`}>
                                            Detail
                                        </Button>
                                        <Button
                                            variant="warning"
                                            as={Link}
                                            to={`/dashboard/cars/edit/${car?.id}`}
                                        >
                                            Edit
                                        </Button>
                                        <DeleteConfirmationModal
                                            id={car.id}
                                            onDelete={handleDelete}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};
