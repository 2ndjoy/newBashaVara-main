import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Services from "../Components/Services/Services";
import CheckDetails from "../Components/CheckDetails";
import AddService from "../Components/AddService/AddService";
import DashBoard from "../Components/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Components/Authentication/ForgetPassword";
import HomeServices from "../Components/HomeServices/HomeServices";
import MyServices from "../Components/DashBoard/MyServices";
import MyOrders from "../Components/DashBoard/MyOrders";
import MyProfile from "../Components/DashBoard/MyProfile";
import MyClients from "../Components/DashBoard/MyClients";
import SeeAlluser from "../Components/DashBoard/SeeAlluser";
import AdminDashboard from "../Components/DashBoard/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addservices",
        element: <AddService></AddService>,
      },
      {
        path: "/homeservices",
        element: <HomeServices></HomeServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/allusers",
        element: <SeeAlluser></SeeAlluser>,
      },
      {
        path: "/checkDetails",
        element: (
          <PrivateRoute>
            <CheckDetails></CheckDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myservices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },

      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <CheckDetails></CheckDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },

      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/myclients",
        element: <MyClients></MyClients>,
      },
      {
        path: "/admindash",
        element: <AdminDashboard></AdminDashboard>,
      },
    ],
  },
]);

export default router;
