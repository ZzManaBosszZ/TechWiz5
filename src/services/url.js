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

    EXCHANGERATE:{
        GET: "convert",
        GET_EXCHANGE_RATE: "rate"
    },

    NOTIFICATION:{
        GET: "notifications",
        PUT: "notifications/mark-as-read/{id}",
    },

    PHOTO: {
        CREATE: "photo",
    },

    EXPENSE: {
        CREATE: "expense",
        PUT: "expense",
        DELETE: "expense",
    },

    TRIP: {
        LIST_BY_ID: "trip/{}",
        LIST_BY_USER: "trip",
        CREATE: "trip",
        PUT: "trip",
        DELETE: "trip",
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