import React from 'react';
import {Link} from 'react-router-dom';

function BlogComponent() {
    return (
        // Blog Cards
        <div class="blog-cards">
                <div class="card1">
                    <h3>Mobile App Design</h3>
                    <Link to={{pathname: "https://medium.com/@Adoriasoft/mobile-app-design-14-trendy-color-schemes-2669b5bb77d3"}} target="_blank">Look Over<i class="fas fa-chevron-right"></i></Link>
                </div>

                <div class="card2">
                    <h3>Medium Article</h3>
                    <Link to={{pathname: "https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab"}} target="_blank">Look Over<i class="fas fa-chevron-right"></i></Link>
                </div>

                <div class="card3">
                    <h3>Choosing colors</h3>
                    <Link to={{pathname: "https://dribbble.com/stories/2018/12/19/choosing-colors-for-web-design-a-practical-ui-color-application-guide"}} target="_blank">Look Over<i class="fas fa-chevron-right"></i></Link>
                </div>
        </div>
    )
}

export default BlogComponent
