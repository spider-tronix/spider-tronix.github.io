import React from 'react';
import '../css/contact.css'
import logo from '../assets/logob.png';

class Contact extends React.Component{
    render(){
        return(
            <>
                <section className="footer" id="contact">
                    <div className="sec_container">
                        <div className="frow">
                            <div className="fcol col_head" style={{position:"relative"}}>
                                <div className="foot-head">
                                    <a href="/" title="Spider Tronix">
                                        <img src={logo} style={{width:40+"px",verticalAlign:"bottom"}} alt="Footer logo" />
                                        &nbsp;tronix
                                    </a>
                                </div>
                                <div className="address_cont">
                                    Spider R&D Lab, Ground floor, Old SAC, (Opposite to CCD), NIT Tiruchirappalli.
                                </div>
                            </div>
                            <div className="fcol col_foot_banner">
                                <div className="frow-subrow">
                                    <div className="fcol-subcol">
                                        <div className="clearfix">
                                            <a href="/#about">About</a>
                                        </div>
                                    </div>
                                    <div className="fcol-subcol">
                                        <div className="clearfix">
                                            <a href="/#projects">Projects</a>
                                        </div>
                                    </div>
                                    <div className="fcol-subcol">
                                        <div className="clearfix">
                                            <a href="/#">Explore</a>
                                            <div className="clearfix_cont">
                                                <ul>
                                                    <li> <a href="https://spider.nitt.edu/" title="Spider R&D Club">Spider R&D Club</a>, <br/> NIT Trichy</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fcol-subcol">
                                        <div className="clearfix">
                                            <a href="/#contact">Contact Us</a>
                                            <div className="clearfix_cont">
                                                <ul>
                                                    <li> <a href="mailto:nitt.spider@gmail.com">nitt.spider@gmail.com</a></li>
                                                    <li> <i>Mobile:</i> &nbsp;(+91) 9791016018</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/><br/>
                        <div className="social-bar">
                            <a href="https://www.facebook.com/SpiderNitt/" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/spider-tronix" title="Github"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/company/spider-r-d/" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://medium.com/spidernitt"><i className="fab fa-medium" title="Medium"></i></a>
                            <a href="https://spider.nitt.edu/" title="Main Website"><i className="fas fa-globe"></i></a>
                            <br/><br/>
                            © 2020 Spider Tronix. All Rights Reserved
                            <br/>
                            Made with <a className="footer-link" target="_blank" rel="noopener noreferrer" href="http://fontawesome.io">FontAwesome</a> and loads of <label style={{color:"red",marginLeft:4+"px"}}>❤</label>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Contact;