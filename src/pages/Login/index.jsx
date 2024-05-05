import { Col, Row } from "react-bootstrap";

// Component
import { LoginComponent } from "../../components/Login";

export const LoginPage = () => {
    return (
        <>
            <Row className="mt-5">
                <Col md={6} className="offset-md-3">
                    <LoginComponent />
                </Col>
            </Row>
        </>
    );
};
