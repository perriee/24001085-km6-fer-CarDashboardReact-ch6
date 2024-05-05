import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail } from "../../redux/actions/car";
import { useParams, useNavigate } from "react-router-dom";

export const CarDetailPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { carDetail, loading } = useSelector((state) => state.car);

    useEffect(() => {
        // get detail car
        dispatch(getCarDetail(navigate, id));
    }, [id, dispatch]);

    return (
        <Row className="mb-5">
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Body>
                        <Form>
                            {loading ? (
                                <>
                                    <h2>Loading...</h2>
                                </>
                            ) : (
                                <>
                                    {carDetail?.image && (
                                        <Image
                                            src={carDetail?.image}
                                            className="img-fluid"
                                            rounded
                                        />
                                    )}

                                    <div className={carDetail?.image && "mt-4"}>
                                        <Form.Group className="mb-3" controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.description}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Rent Per Day</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.rentPerDay?.toLocaleString(
                                                    "id-ID",
                                                    {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    }
                                                )}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Model</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.model}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Plate</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.plate}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Year</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.year}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Manufacture</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.Manufacture?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.Type?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Size</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.Size?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Capacity</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.Size?.capacity}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Transmission</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={carDetail?.Transmission?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                    </div>
                                </>
                            )}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
