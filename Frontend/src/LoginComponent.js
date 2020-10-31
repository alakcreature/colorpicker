import React,{useState} from 'react';
import {connect} from "react-redux";
import Loader from 'react-loader-spinner';
import apis from "./services/apis";
import http from "./services/httpCall";
import {login,logout,setUserDetails} from "./actions/authAction";
import './LoginComponent.css';


function LoginComponent(props) {
    let [overlayclicked,setoverlaystate] = useState(false);
    let [overlaymobileclicked,setoverlaymobilestate] = useState(false);
    let [username,setusername] = useState("");
    let [email,setemail] = useState("");
    let [password,setpassword] = useState("");
    let [view,setview] = useState("login");
    let [loadervisible,setloadervisibilty] = useState(false);

    let handleOverlay = ()=>{
        setoverlaystate(!overlayclicked);
    }

    let handleOverlaymobile = () =>{
        setoverlaymobilestate(!overlaymobileclicked);
    }

    let submit =(e)=>{
        e.preventDefault();
        setloadervisibilty(true);
        // console.log(view)
        if(view==="login"){
            // Login code
            http.post(apis.LOGIN,{
                email: email,
                password: password
            }).then((result)=>{
                setloadervisibilty(false);
                // console.log(result.data.token);
                props.login(result.data.token);
            })
            .catch(err=>{
                setloadervisibilty(false);
                console.log(err);
                window.alert(err);
                props.logout()
            })
        }else{
            // Sign up code
            http.post(apis.REGISTER,{
                username:username,
                email: email,
                password: password
            }).then((result)=>{
                setloadervisibilty(false);
                // console.log(result);
                window.alert(result.data.message + "Now you can sign in");
            })
            .catch(err=>{
                window.alert(err);
                setloadervisibilty(false);
                console.log(err);
            })
        }
    }

    return (
        <React.Fragment>
            <div className={`colors-loader ${!loadervisible && "loaderinvisible"}`}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
            <div className="container-wrapper">
                <div className={`login-container ${overlayclicked?"right-active-panel":""}`} id="container">
                <div className={`form-container sign-up-container ${overlaymobileclicked?"":"overlay-panel-inactive-mobile"}`}>
                    <form onSubmit={submit}>
                        <h1>Create Account</h1>
                        {/* <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
                        <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                        <button onClick={()=>{setview("signup")}}>Sign Up</button>
                        <button id="signIn" className="ghostMobile" onClick={handleOverlaymobile}>Sign In</button>
                    </form>
                </div>
                <div className={`form-container sign-in-container ${overlaymobileclicked? "overlay-panel-inactive-mobile":"" }`}>
                    <form onSubmit={submit}>
                        <h1>Sign in</h1>
                        {/* <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
                        <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                        <a href="/">Forgot your password?</a>
                        <button onClick={()=>{setview("login")}}>Sign In</button>
                        <button id="signUp" className="ghostMobile" onClick={handleOverlaymobile}>Sign Up</button>
                    </form>
                </div>
                
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleOverlay}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleOverlay}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps, {
    login,
    logout,
    setUserDetails
  })(LoginComponent);
