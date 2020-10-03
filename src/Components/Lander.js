import React from 'react';
import '../css/landing.css';
import LandingImage from '../assets/landing_image_holder.png'
class Lander extends React.Component{
    render(){
        return(
            <>
                <section className="secFitHeight landing_sec" id="home">
                    <div className="sec_container">
                        <div className="ldg_wrapper">
                            <div className="ldg_row">
                                <div className="column50">
                                    <div className="header-text-area">
                                        <h1>Team of Ideators and Innovators.</h1>
                                        <h3>We take up projects in the field of Emdedded and Electroincs, Robotics and Control, Signal Processing and Machine Learning and much more.</h3>
                                        <div className="action-wrap">
                                            <a href="#about"><button className="get_started_but">Know More</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column50">
                                    <div className="ldg_img_con">
                                        <img src={LandingImage} alt="Landing Laptop"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="landing_svg">
                        <polygon className="svg--max" fill="white" points="0,60 33,100 34,100 100,0 100,100 0,100"></polygon>
                        <polygon className="svg--sm" fill="white" points="0,70 20,100 21,100 100,0 100,100 0,100"></polygon>
                        <polygon className="svg--min" fill="white" points="0,100 1,100 100,0 100,100 0,100"></polygon>
                    </svg>
                </section>
            </>
        );
    }
}

export default Lander;