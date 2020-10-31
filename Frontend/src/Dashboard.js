import React, { useEffect,useState } from 'react';
import Loader from 'react-loader-spinner';
import {Link} from "react-router-dom"
import apis from "./services/apis";
import http from "./services/httpCall";

function Dashboard(props) {
    let [colorsarray,setcolors] = useState([]);
    let [colorcode,setcolorcode] = useState([]);
    let [reload,setreloadstate] = useState(false);
    let [loadervisible,setloadervisibilty] = useState(false);
    
    const fetchColors = ()=>{
        setloadervisibilty(true);
        http.get(apis.FETCHCOLORS)
        .then(result=>{
            setloadervisibilty(false);
            setcolors(result.data.data);

            let colorstrips = window.document.querySelectorAll(".color-strip");
            colorstrips.forEach((strip)=>{
                if(strip.style.background === ""){
                  strip.children[0].innerHTML = "Invalid";
                      strip.addEventListener("click",()=>{
                        console.log(strip.parentElement.parentElement);
                          http.post(apis.DELETECOLOR,{colorcode: strip.parentElement.nextElementSibling.innerHTML})
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

            let deletestrips = document.querySelectorAll(".delete");
            // console.log(window.document.querySelectorAll(".delete"))
            deletestrips.forEach((deletestrip)=>{
                deletestrip.addEventListener("click",()=>{
                  // console.log(deletestrip.previousElementSibling.innerHTML)
                  setloadervisibilty(true);
                  http.post(apis.DELETECOLOR,{colorcode: deletestrip.previousElementSibling.innerHTML})
                          .then((result)=>{
                              // console.log(result)
                              setloadervisibilty(false);
                              deletestrip.parentElement.remove();
                              window.alert("Color Code Deleted");
                          })
                          .catch(err=>{
                            setloadervisibilty(false);
                            console.log(err);
                            window.alert(err);
                          })
                })
              })
        }).catch(err=>{
            setloadervisibilty(false);
            console.log(err);
            // Handle the Error part
            window.alert(err);
        })
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        setloadervisibilty(true);
        // console.log(colorcode);
        http.post(apis.SAVECOLOR,{
            colorcode: colorcode
        }).then((result)=>{
            setloadervisibilty(false);
            // console.log(result);
            setreloadstate(!reload);
            window.alert(result.data.message);
        }).catch(err=>{
            setloadervisibilty(false);
            console.log(err);
            window.alert(err);
        })
    }

    

    useEffect(()=>{
        fetchColors();
    },[reload]);

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
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="color-strip" style={{background: "#000000"}}>
                                            <h5>Click</h5>
                                        </div>
                                    </td>
                                    <td>#fffff</td>
                                    <td className="delete"><i className="fas fa-trash"></i></td>
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
                                        <td className="delete"><i className="fas fa-trash"></i></td>

                                    </tr>
                                ))}
                        </tbody>
                        </table>
                    ):
                    (
                        <h1 className="empty-array">Add atleast one color to your <Link to="/dashboard"><span>profile </span><i className="fas fa-user"></i></Link></h1>
                    )}
                </div>
            </div>

            {/* Submit Section  */}
            <div className="submit-section">
                    <form onSubmit={handlesubmit}>
                        <h3>Save your favourite color code.</h3>
                        <input className="input" type="text" placeholder="Enter the code" name="colorcode" onChange={(e)=>{setcolorcode(e.target.value)}}/>
                        <input className="submit" type="submit" value="Submit" />
                        
                    </form>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;
