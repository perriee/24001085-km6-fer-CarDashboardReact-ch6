import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLinkItem } from "./NavLinkItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProfile } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

export const NavbarComponent = () => {
    const dispatch = useDispatch();

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch, token]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand as={Link} to="/">
                    Kampus Merdeka
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {isDesktopOrLaptop ? (
                    <NavLinkItem user={user} />
                ) : (
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavLinkItem user={user} />
                    </Navbar.Collapse>
                )}
            </Container>
        </Navbar>
    );
};
