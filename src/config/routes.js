const routes = {
    // Home Routes
    home: "/",
    error: "/error",

    // Authentication Routes
    profile: "/profile",
    login: "/login",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",
    register:"/register",

    //About And Contact Routes
    about_us: "/about-us",
    contact_us: "/contact-us",

    //Trip Routes
    trip: "/trip",
    trip_detail: "/trip-detail",
};
export default routes;