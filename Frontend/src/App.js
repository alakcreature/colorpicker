import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import http from "./services/httpCall"
// import apis from "./services/apis"
import PrivateRoute from "./PrivateWrapper";
import {login,logout,setUserDetails} from "./actions/authAction";
import Dashboard from "./Dashboard";
import LoginWrapper from "./LoginWrapper";
import LoginComponent from "./LoginComponent";
import Container from "./components/Container";
import FooterLinks from "./components/FooterLinks";
import Footer from "./components/Footer";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import BlogComponent from "./components/BlogComponent";
import ColorComponent from "./components/ColorComponent";
import './App.css';

function App(props) {

  //auth check if token exist
  let Token  = localStorage.getItem("Token");
  // console.log(Token);
  if(Token && Token!=="null" && Token!=="undefined"){
    props.login(Token);
  }

  let count = 0;
  const handlecount =()=>{
    count = count+1;
  }

  return (
    <React.Fragment>
      {/* Anchor Tag */}
      <BrowserRouter> 
        <Link to="#" id="top"></Link>
        {/* Container */}
        <div className="container">
          <Container />       
          <Switch>
          <Route path="/" exact={true}>
            <HomeComponent />
          </Route>
          <Route path="/colors" exact={true}>
            <ColorComponent />
          </Route>
          <Route path="/blogs" exact={true}>
            <BlogComponent />
          </Route>
          <Route path="/about" exact={true}>
            <AboutComponent />
          </Route>
          <LoginWrapper path="/login" exact={true}>
            <LoginComponent />
          </LoginWrapper>
          <PrivateRoute path="/dashboard" refresh={()=>handlecount()} exact={true}>
            <Dashboard />
          </PrivateRoute>
        </Switch>
        </div>
      </BrowserRouter>

      {/* Footer Links */}
      <FooterLinks />

      {/* Main Footer */}
      <Footer />
      <a href="#top" className="gotopbtn">
        <i className="fas fa-arrow-up"></i>
      </a>
    </React.Fragment>
  );
}

const mapStateToProps= (state) => {
  return {}
}

export default connect(mapStateToProps, {
  login,
  logout,
  setUserDetails
})(App);
