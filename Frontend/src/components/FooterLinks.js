import React from 'react';

function FooterLinks() {
    return (
        <section className="links">
          <div className="links-inner">
              <div className="rightside-link">
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Blogs</a></li>
                  </ul>
              </div>

              <div className="newsletter">
                  <h1>Newsletter</h1>
                  <div className="input-field">
                      <input type="text" placeholder="Enter your email" />
                      <a href="#">Subscribe</a>
                  </div>
              </div>
          </div>
        </section> 
    )
}

export default FooterLinks;