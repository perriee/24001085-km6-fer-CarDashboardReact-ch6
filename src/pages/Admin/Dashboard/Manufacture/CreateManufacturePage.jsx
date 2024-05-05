import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createManufacture } from "../../../../redux/actions/manufacture";

export const CreateManufacturePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // dispatch the create manufacture action
        dispatch(createManufacture(navigate, name, setIsLoading));
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Create Manufacture</h2>
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

                <Button variant="primary" type="submit" className="mb-3" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create"}
                </Button>
            </Form>
        </>
    );
};
