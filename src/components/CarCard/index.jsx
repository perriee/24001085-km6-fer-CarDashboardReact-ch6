import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CarCard = ({ carData }) => {
    return (
        <Col md={4} className="d-grid g-4">
            <Card className="shadow">
                <Card.Img variant="top" src={carData?.image} />
                <Card.Body>
                    <Card.Title className="fs-4">
                        {carData?.name || "Nama tidak tersedia"}
                    </Card.Title>
                    <Card.Text className="fs-5 text-secondary">
                        {carData?.description || "Deskripsi tidak tersedia"}
                    </Card.Text>
                    <Card.Text className="fs-5 fw-bold">
                        {carData?.rentPerDay?.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`/car/${carData?.id}`}>
                        Lihat Detail
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

CarCard.propTypes = {
    carData: PropTypes.object,
};
