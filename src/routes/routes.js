import config from "../config/index";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import NotFound from "../components/pages/Other/NotFound";
import Menu from "../components/pages/Menu";
import ChefDetail from "../components/pages/Chefs/ChefDetail";
import Chefs from "../components/pages/Chefs";
import Blogs from "../components/pages/Blog";
import BlogDetail from "../components/pages/Blog/BlogDetail";
import FoodShop from "../components/pages/FoodShop/Shop";
import FoodShopDetail from "../components/pages/FoodShop/FoodShopDetail";
import Login from "../components/pages/Auth/Login";
import ForgotPassWord from "../components/pages/Auth/ForgotPassWord";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import CartTab from "../components/pages/Cart/CartTab";
import CheckOut from "../components/pages/Cart/CheckOut";
import Order from "../components/pages/Cart/Order";
import BookTable from "../components/pages/Reservation/BookTable";
import OrderFood from "../components/pages/Reservation/OrderFood";
import PaymentCancel from "../components/pages/Cart/CheckOutCancel";


const publicRoutes = [
    { path: config.routes.login, component: Login },

];

const privateRoutes = [
    // Cart
    { path: config.routes.cartTab, component: CartTab },

];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    // { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassWord },
    { path: config.routes.reset_password, component: ResetPassword },

];

export { publicRoutes, privateRoutes, authenticationRoutes };