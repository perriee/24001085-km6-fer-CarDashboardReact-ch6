import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getManufactures } from "../../../../redux/actions/manufacture";

export const ManufacturePage = () => {
    const dispatch = useDispatch();
    const { manufactures } = useSelector((state) => state.manufacture);

    useEffect(() => {
        dispatch(getManufactures());
    }, [manufactures, dispatch]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Manufactures</h2>
                {/* <Button variant="primary" as={Link} to={"/dashboard/cars/create"}>
                    Create Manufacture
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
                    {manufactures.map((manufacture, index) => (
                        <tr key={manufacture.id}>
                            <td>{index + 1}</td>
                            <td>{manufacture?.id}</td>
                            <td>{manufacture?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};
