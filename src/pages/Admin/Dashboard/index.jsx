import { Col, Row } from "react-bootstrap";
import { WidgetComponent } from "../../../components/Widget";

export const DashboardAdminPage = () => {
    return (
        <Row>
            <Col>
                <WidgetComponent title={"Car"} link={"/dashboard/cars"} />
            </Col>
            <Col>
                <WidgetComponent title={"Manufacture"} link={"/dashboard/manufactures"} />
            </Col>
            <Col>
                <WidgetComponent title={"Type"} link={"/dashboard/types"} />
            </Col>
            <Col>
                <WidgetComponent title={"Size"} link={"/dashboard/sizes"} />
            </Col>
            <Col>
                <WidgetComponent title={"Transmission"} link={"/dashboard/transmissions"} />
            </Col>
        </Row>
    );
};
