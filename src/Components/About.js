import React from 'react';
import '../css/about.css';
import $ from 'jquery';

class About extends React.Component{
    render(){
        return(
            <>
                <section className="about_sec" id="about">
                    <div className="sec_container">
                        <div className="solution_banner">
                            <div className="sec_head">About</div>
                            <br/><br/><br/>
                            <div className="sec_desc about_desc">
                                Spider, the Research and Development club of <a href="https://www.nitt.edu" alt="Visit NIT Trichy Website">NIT Trichy</a>, is a cluster of like-minded individuals pursuing projects in some of the booming technology sectors. At the Tronix division of Spider, we largely work on the domains of Embedded Systems,  Electronics, IoT, Robotics and Simulation, Control Systems, Solid Modelling, Computer Vision and Artificial Intelligence to name a few. In addition to the R&D projects, we also conduct μCON (mu-CON), a workshop held every year exclusively for the freshmen of NIT Trichy. The workshop gives students a head start on microcontrolllers and embedded programming right in their first semester . We also organise CRE-8, a competitive event for first year students to kindle the spirit of innovation. 
                                <br/><br/>
                                Head to <a href="https://github.com/orgs/spider-tronix/" alt="Visit Github Spider Tronix Organisation">Github organization</a> to see what we do or check out the <a href="/#projects" alt="Move to Projects Section">Projects</a> section for more info. 
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
    componentDidMount(){
        function about_ScrollSpy(){
            let headerText = $(".about_desc");
            if (headerText.visible(true) && headerText.css( "visibility")==="hidden") {
                headerText.css( "visibility", "visible" );
                headerText.addClass("a-come-in-bottom"); 
                setTimeout(function(){
                    headerText.removeClass("a-come-in-bottom"); 
                },800);
            }
            if(headerText.visible(true)===false){
                headerText.css( "visibility", "hidden" );
            } 
        }
        $(window).scroll(about_ScrollSpy);
        about_ScrollSpy();
    }
}

export default About;