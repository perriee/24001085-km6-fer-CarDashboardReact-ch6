import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/car";
import { CarCard } from "../../components/CarCard";

export const HomePage = () => {
    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return (
        <Row className="mb-5">
            {cars.length > 0 && cars.map((car) => <CarCard key={car?.id} carData={car} />)}
        </Row>
    );
};
