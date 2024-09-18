import config from "../config/index";
import Login from "../components/pages/Auth/Login";
import ForgotPassWord from "../components/pages/Auth/ForgotPassWord";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import Register from "../components/pages/Auth/Register";
import Home from "../components/pages/Dashboard/index"
import AboutUs from "../components/pages/Others/About";
import Contact from "../components/pages/Others/Contact";
import ListTrip from "../components/pages/TripsManagement/ListTrip";
import TripDetail from "../components/pages/TripsManagement/DetailTrip";


const publicRoutes = [
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.home, component: Home },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.contact_us, component: Contact },
    { path: config.routes.trip, component: ListTrip },
    { path: config.routes.trip_detail, component: TripDetail }

];

const privateRoutes = [

];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassWord },
    { path: config.routes.reset_password, component: ResetPassword },

];

export { publicRoutes, privateRoutes, authenticationRoutes };