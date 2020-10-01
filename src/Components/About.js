import React from 'react';
import '../css/about.css';

class About extends React.Component{
    render(){
        return(
            <>
                <section className="about_sec" id="about">
                    <div className="sec_container">
                        <div className="solution_banner">
                            <div className="sec_head">About</div>
                            <br/><br/><br/>
                            <div className="sec_desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="landing_svg">
                        <polygon className="svg--max" fill="#E9EBEE" opacity="0.7" points="0,100 90,5 100,20 100,100 0,100"></polygon>
                        <polygon className="svg--sm" fill="#E9EBEE" opacity="0.7" points="0,100 95,5 100,15 100,100 0,100"></polygon>
                        <polygon className="svg--min" fill="#E9EBEE" opacity="0.7" points="0,100 97,5 100,10 100,100 0,100"></polygon>
                    </svg>
                </section>
            </>
        );
    }
}

export default About;