import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getSizes } from "../../../../redux/actions/size";

export const SizePage = () => {
    const dispatch = useDispatch();
    const { sizes } = useSelector((state) => state.size);

    useEffect(() => {
        dispatch(getSizes());
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Sizes</h2>
                {/* <Button variant="primary" as={Link} to={"/dashboard/cars/create"}>
                    Create Size
                </Button> */}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {sizes.map((size, index) => (
                        <tr key={size.id}>
                            <td>{index + 1}</td>
                            <td>{size?.id}</td>
                            <td>{size?.name}</td>
                            <td>{size?.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};
