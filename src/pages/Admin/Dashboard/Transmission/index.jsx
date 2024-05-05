import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getTransmissions } from "../../../../redux/actions/transmission";

export const TransmissionPage = () => {
    const dispatch = useDispatch();
    const { transmissions } = useSelector((state) => state.transmission);

    useEffect(() => {
        dispatch(getTransmissions());
    }, [transmissions, dispatch]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Transmissions</h2>
                {/* <Button variant="primary" as={Link} to={"/dashboard/cars/create"}>
                    Create Transmission
                </Button> */}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {transmissions.map((transmission, index) => (
                        <tr key={transmission.id}>
                            <td>{index + 1}</td>
                            <td>{transmission?.id}</td>
                            <td>{transmission?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};
