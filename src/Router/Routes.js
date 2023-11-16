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
        path: "/checkDetails",
        element: (
          <PrivateRoute>
            <CheckDetails></CheckDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myservices",
        element: <MyServices></MyServices>,
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);

export default router;
