import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        /* login action (fetch api) */
        dispatch(login(navigate, email, password, setIsLoading));
    };
    return (
        <Card>
            <Card.Header className="fw-bold">Login</Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    {/* Email Address */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    {/* Button Login */}
                    <Button variant="primary" type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
