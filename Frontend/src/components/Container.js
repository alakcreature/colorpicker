import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";
import {logout} from "../actions/authAction";



function Container(props) {
    let [mobilemenubtn,setmobilemenubtn] = useState(false);

    return (
        <React.Fragment>
            {/* Menu btn */}
            <div className="menu-btn" onClick={()=>{setmobilemenubtn(!mobilemenubtn)}}>
                <i className="fas fa-bars fa-2x"></i>
            </div> 
            {/* Nav Bar  */}
            <div className="main-nav">  
                    <div className="logo">
                        <h1>Pick<span>Code</span></h1>
                    </div>

                    <ul className={`main-menu ${mobilemenubtn && "show"}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/colors">Colors</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/dashboard">Profile</Link></li>
                    </ul>

                    <div className="right-menu">
                        {props.Auth.isLoggedIn?
                        (
                            <div onClick={()=>{ props.logout()}} style={{cursor: "pointer"}}>
                                <i className="fas fa-sign-out-alt fa-2x" aria-hidden="true"></i>
                            </div>
                        )
                        :
                        (
                            <Link to="/login" id="modalBtn" className="button">
                                <i className="fas fa-user fa-2x"></i>
                            </Link>
                        )
                        }
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
    logout
})(Container);
