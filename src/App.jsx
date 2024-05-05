import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

// PAGES
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";

// COMPONENTS
import { NavbarComponent } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { NonProtected } from "./components/NonProtected";
import { CarDetailPage } from "./pages/Car/detail";
import { DashboardAdminPage } from "./pages/Admin/Dashboard";
import { CarPage } from "./pages/Admin/Dashboard/Car";
import { CreateCarPage } from "./pages/Admin/Dashboard/Car/CreateCarPage";
import { UpdateCarPage } from "./pages/Admin/Dashboard/Car/UpdateCarPage";
import { ManufacturePage } from "./pages/Admin/Dashboard/Manufacture";
import { TypePage } from "./pages/Admin/Dashboard/Type";
import { SizePage } from "./pages/Admin/Dashboard/Size";
import { TransmissionPage } from "./pages/Admin/Dashboard/Transmission";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <NavbarComponent />
                <Container className="mt-5">
                    <HomePage />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (
            <NonProtected>
                <NavbarComponent />
                <Container className="mt-5">
                    <LoginPage />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <NavbarComponent />
                <Container className="mt-5">
                    <RegisterPage />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected>
                <NavbarComponent />
                <Container className="mt-5">
                    <ProfilePage />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/car/:id",
        element: (
            <Protected>
                <NavbarComponent />
                <Container className="mt-5">
                    <CarDetailPage />
                </Container>
            </Protected>
        ),
    },

    // ADMIN DASHBOARD
    {
        path: "/dashboard",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <DashboardAdminPage />
                </Container>
            </Protected>
        ),
    },

    // CARS
    {
        path: "/dashboard/cars",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <CarPage />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/dashboard/cars/create",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <CreateCarPage />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/dashboard/cars/edit/:id",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <UpdateCarPage />
                </Container>
            </Protected>
        ),
    },

    // MANUFACTURES
    {
        path: "/dashboard/manufactures",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <ManufacturePage />
                </Container>
            </Protected>
        ),
    },

    // TYPES
    {
        path: "/dashboard/types",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <TypePage />
                </Container>
            </Protected>
        ),
    },

    // SIZES
    {
        path: "/dashboard/sizes",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <SizePage />
                </Container>
            </Protected>
        ),
    },

    // TRANSMISSIONS
    {
        path: "/dashboard/transmissions",
        element: (
            <Protected roles={["superadmin", "admin"]}>
                <NavbarComponent />
                <Container className="mt-5">
                    <TransmissionPage />
                </Container>
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;
