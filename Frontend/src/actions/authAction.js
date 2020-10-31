import http from "../services/httpCall";

export const login = (token,userdetails) => {
    console.log(token);
    http.defaults.headers.common['Authorization']='Bearer '+ token;
    localStorage.setItem("Token",token);
    return {
        type: 'LOGIN',
        token : token,
        userdetails:userdetails
    };
};

export const logout = () => {
    localStorage.removeItem("Token");
    return {
        type: 'LOGOUT'
    };
};

  
export const setUserDetails = (user)=>{
    return {
        type : 'SET_USER_DETAILS',
        payload : user
    }
}