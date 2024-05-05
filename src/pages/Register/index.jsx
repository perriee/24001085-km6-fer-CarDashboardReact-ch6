import { Card, Col, Row } from "react-bootstrap";
import { RegisterComponent } from "../../components/Register";

// Component

export const RegisterPage = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <RegisterComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
