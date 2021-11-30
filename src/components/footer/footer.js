import React from 'react';
import './Footer.css'

function Footer(){
    return (
        <section className="footer">
          <hr className="footer-seperator" />
          <section className="footer-social-media">
              <ul>
            <li><a href="https://www.linkedin.com/in/javier-majano/" target="_blank" rel="noopener noreferrer"> <i className="icon fab fa-linkedin-in fa-lg"></i></a></li>
            <li><a href="https://github.com/JavierMajano" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github fa-lg"></i></a></li>
            </ul>
          </section>

          <section className="footer-info">
           
            <section className="footer-info-center">
              <section className="footer-info__email">
                javiermajano98@gmail.com
              </section>
                        </section>
            
          </section>
          <hr className="footer-seperator" />
        </section>
      );
}

export default Footer;