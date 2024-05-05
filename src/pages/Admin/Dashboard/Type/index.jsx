import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../../../redux/actions/type";

export const TypePage = () => {
    const dispatch = useDispatch();
    const { types } = useSelector((state) => state.type);

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Types</h2>
                {/* <Button variant="primary" as={Link} to={"/dashboard/cars/create"}>
                    Create Type
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
                    {types.map((type, index) => (
                        <tr key={type.id}>
                            <td>{index + 1}</td>
                            <td>{type?.id}</td>
                            <td>{type?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};
