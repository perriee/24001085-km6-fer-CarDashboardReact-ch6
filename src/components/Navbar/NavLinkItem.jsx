import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import PropTypes from "prop-types";

export const NavLinkItem = ({ user }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Nav>
            <Nav.Link as={NavLink} to="/">
                Home
            </Nav.Link>
            {user && user?.role != "user" && (
                <Nav.Link as={NavLink} to="/dashboard">
                    Dashboard
                </Nav.Link>
            )}
            {user ? (
                <>
                    <Nav.Link as={NavLink} to="/profile">
                        {user?.name}
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => {
                            dispatch(logout());
                            navigate("/login");
                        }}
                    >
                        Logout
                    </Nav.Link>
                </>
            ) : (
                <>
                    <Nav.Link as={NavLink} to="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/register">
                        Register
                    </Nav.Link>
                </>
            )}
        </Nav>
    );
};

NavLinkItem.propTypes = {
    user: PropTypes.object,
};
