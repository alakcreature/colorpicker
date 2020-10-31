const envoirnment = process.env.NODE_ENV;
const apis = {

    BASE_LOCAL_URL : envoirnment === "development" ? "http://localhost:3000" : "https://pickcode.herokuapp.com/",
    BASE_SERVER_URL : envoirnment === "development"? "http://localhost:7000": "https://pickcode.herokuapp.com/",

    GET_USER_DETAILS:"/apis/v1/userdetails",
    LOGIN : "/api/login",
    REGISTER : "/api/signup",
    FETCHCOLORS : "/api/fetchcolors",
    FETCHRANDOMCOLORS: "/api/fetchrandomcolors",
    DELETECOLOR: "/api/deletecolor",
    FETCHUSERCOLORS: "/api/fetchcolor",
    SAVECOLOR: "/api/savecolor"
};

export default apis;