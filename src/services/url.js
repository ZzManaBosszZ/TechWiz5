import config from "../config/index";

const url = {
    BASE_URL: config.key.BASE_API_URL,

    // Authentication
    AUTH: {
        LOGIN: "auth/user/signin",
        SIGN_UP: "auth/user/signup",
        CHANGE_PASSWORD: "user/change-password",
        FORGOT_PASSWORD: "auth/user/forgot-password",
        RESET_PASSWORD: "auth/user/reset-password",
        PROFILE: "user/profile",
        UPDATE_PROFILE: "user/update-profile",
    },

    TRIP: {
        LIST: "/any/trip",
        LIST_BY_USER: "/trip",
        CREATE: "/trip",
        PUT: "/trip",
        DELETE: "/trip",
    },

    CATEGORY: {
        LIST: "/any/category",
        LIST_BY_USER: "/category",
        CREATE: "/category",
        PUT: "/category",
        DELETE: "/category",
    },

}
export default url;