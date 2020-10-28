import React from 'react';
import '../css/landing.css';
import LandingImage from '../assets/landing_image_holder.png';
import $ from 'jquery';

class Lander extends React.Component{
    render(){
        return(
            <>
                <section className="secFitHeight landing_sec" id="home">
                    <div className="sec_container">
                        <div className="ldg_wrapper">
                            <div className="ldg_row">
                                <div className="column50">
                                    <div className="header-text-area" style={{"visibility":"hidden"}}>
                                        <h1>A Team of Ideators and Innovators</h1>
                                        <h3>We take up projects in the domains of Electronics and Embedded Systems, Robotics and Control, Signal Processing, Machine Learning, and beyond.</h3>
                                        <div className="action-wrap">
                                            <a href="#about"><button className="get_started_but">Know More</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column50">
                                    <div className="ldg_img_con" style={{"visibility":"hidden"}}>
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
    componentDidMount(){
        function lander_ScrollSpy(){
            let headerText = $(".header-text-area");
            if (headerText.visible() && headerText.css( "visibility")==="hidden") {
                headerText.css( "visibility", "visible" );
                headerText.addClass("l-come-in-left"); 
                setTimeout(function(){
                    headerText.removeClass("l-come-in-left"); 
                },800);
            }
            if(headerText.visible(true)===false){
                headerText.css( "visibility", "hidden" );
            } 
            let headerImage = $(".ldg_img_con");
            if (headerImage.visible() && headerImage.css( "visibility")==="hidden") {
                headerImage.css( "visibility", "visible" );
                headerImage.addClass("l-come-in-right"); 
                setTimeout(function(){
                    headerImage.removeClass("l-come-in-right"); 
                },800);
            }
            if(headerImage.visible(true)===false){
                headerImage.css( "visibility", "hidden" );
            }
        }
        $(window).scroll(lander_ScrollSpy);
        lander_ScrollSpy();
    }
}

export default Lander;