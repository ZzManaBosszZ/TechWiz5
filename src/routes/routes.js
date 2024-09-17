import config from "../config/index";
import Login from "../components/pages/Auth/Login";
import ForgotPassWord from "../components/pages/Auth/ForgotPassWord";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import Home from "../components/pages/Dashboard/index"


const publicRoutes = [
    { path: config.routes.login, component: Login },
    { path: config.routes.home, component: Home },

];

const privateRoutes = [

];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    // { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassWord },
    { path: config.routes.reset_password, component: ResetPassword },

];

export { publicRoutes, privateRoutes, authenticationRoutes };