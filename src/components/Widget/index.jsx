import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const WidgetComponent = ({ title, link }) => {
    return (
        <Card as={Link} to={link}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

WidgetComponent.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};
