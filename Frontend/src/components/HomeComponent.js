import React from 'react';
import {Link} from "react-router-dom"

function HomeComponent() {
    return (
        <React.Fragment>
            {/* Showcase  */}
            <div className="showcase">
                <div className="content">
                    <h1>Color Picker</h1>
                    <p>Searching for that perfect color has never been easier</p>
                    <Link to="/colors" className="btn">
                        Know More <i className="fas fa-chevron-right"></i>
                    </Link>
                    <img src="images/color.svg" alt="" />
                </div>
            </div>

            {/* Section 1 */}
            <section className="leftside">
                <div className="leftside-pic">
                    <div className="leftside-inner">
                        <img src="images/leftside.svg" alt="" />
                    </div>
                </div>
                <div className="leftside-content">
                    <div className="content">
                        <h1>Color Picker</h1>
                        <p>Save your favourite color code and use it for your future projects.</p>
                        <Link to="/colors" className="btn">
                            Know More <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <div className="cards">
                <div>
                    <img src="images/card1.jpeg" alt="" />
                    <h3>Mobile App Design</h3>
                    <p>14 Trendy Color Schemes</p>
                    <Link to="https://medium.com/@Adoriasoft/mobile-app-design-14-trendy-color-schemes-2669b5bb77d3" target="_blank">Learn More <i className="fas fa-chevron-right"></i></Link>
                </div>

                <div>
                    <img src="images/card2.jpeg" alt="" />
                    <h3>Medium Article</h3>
                    <p>Color Tools For Designers 2019</p>
                    <Link to="https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab" target="_blank">Learn More <i className="fas fa-chevron-right"></i></Link>
                </div>

                <div>
                    <img src="images/card3.jpeg" alt="" />
                    <h3>Choosing colors for web design</h3>
                    <p>A practical UI color application guide</p>
                    <Link to="https://dribbble.com/stories/2018/12/19/choosing-colors-for-web-design-a-practical-ui-color-application-guide" target="_blank">Learn More <i className="fas fa-chevron-right"></i></Link>
                </div>
            </div>

            {/* Section 2 */}
            <section className="rightside">
                <div className="rightside-content">
                    <div className="content">
                        <h1>Color Picker</h1>
                        <p>You can click over the strips to see the colors in background.</p>
                        <Link to="/colors" className="btn">
                            Know More <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="rightside-pic">
                    <div className="rightside-inner">
                        <img src="images/rightside.svg" alt="" />
                    </div>
                </div>
            </section>

            {/* Color Spectrum */}
            <div className="main-spectrum">
                <img src="images/spectrum.svg" alt="" />
                <div className="spectrum-content">
                    <div className="spectrum-wrapper">
                        <div className="spectrum-layer"></div>
                    </div>
                <div>
                    <br />
                    Move your mouse over color spectrum or click on it to see respective rgb and hex values
                    <br />
                </div>
            
                <div>Red: <span className="red"></span></div>
                <div>Green: <span className="green"></span></div>
                <div>Blue: <span className="blue"></span></div>
                <div><br />Hex: <span className="hex"></span></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeComponent
