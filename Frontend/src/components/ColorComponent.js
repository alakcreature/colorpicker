import React,{useState,useEffect} from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import apis from "../services/apis";
import http from "../services/httpCall";

function ColorComponent() {

    let [colorsarray,setcolors] = useState([]);
    let [loadervisible,setloadervisibilty] = useState(false);

    const fetchColors = ()=>{
        setloadervisibilty(true);
        http.get(apis.FETCHRANDOMCOLORS)
        .then(result=>{
            setloadervisibilty(false);
            setcolors(result.data.data);
            // console.log(window.document.querySelectorAll(".color-strip"));
            let colorstrips = window.document.querySelectorAll(".color-strip");
            colorstrips.forEach((strip)=>{
                if(strip.style.background === ""){
                  strip.children[0].innerHTML = "Invalid";
                      strip.addEventListener("click",()=>{
                        console.log(strip.parentElement.parentElement);
                          http.post("/api/deletecolor",{colorcode: strip.parentElement.nextElementSibling.innerHTML})
                          .then((result)=>{
                              // console.log(result)
                              strip.parentElement.parentElement.remove();
                              window.alert("It is invalid code, it's deleted");
                          })
                          .catch(err=>{
                            console.log(err)
                            window.alert(err);
                          })
                      })
                  }
                else{
                    strip.addEventListener("click",()=>{
                    //   console.log(strip)
                      document.body.style.background = strip.style.background
                      setTimeout(() => {
                        document.body.style.background = "#f2f2f2"
                      }, 1200);
                    })
                  }
                })
        }).catch(err=>{
            setloadervisibilty(false);
            console.log(err);
            // Handle the Error part
            window.alert(err);
        })
    }

    useEffect(()=>{
        fetchColors();
    },[]);

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
            
            {/* Color Table */}
            <div className="colortable-showcase">
                <div className="colortable-inner">
                    {colorsarray && colorsarray.length!==0?(
                        <table className="content-table">
                            <thead>
                                <tr>
                                <th>Number</th>
                                <th>Color Strip</th>
                                <th>Color Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="color-strip" style={{background: "#009879"}}>
                                            <h5>Click</h5>
                                        </div>
                                    </td>
                                    <td>#fffff</td>
                                </tr> */}
        
                                {colorsarray && colorsarray.map((color,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>
                                            <div className="color-strip" style={{background: color.colorcode}}>
                                                <h5>Click</h5>
                                            </div>
                                        </td>
                                        <td>{color.colorcode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>    
                    ):(
                        <h1 className="empty-array">Add atleast one color to your <a href="#"><span>profile </span><i className="fas fa-user"></i></a>.</h1>
                    )}
                </div>
            </div>

            {/* Card Section */}
            <div className="card">
                <div className="card-inner">
                    <h3>Want to save your favourite color code?</h3>
                    <h4>Head to your <Link to="/dashboard"><span>profile </span><i className="fas fa-user"></i></Link></h4>
                    <img src="images/usercard.svg" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ColorComponent;
