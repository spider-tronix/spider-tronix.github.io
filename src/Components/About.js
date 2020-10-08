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
                            Spider, the Research and Development club of <a href="https://www.nitt.edu" alt="Visit NIT Trichy Website">NIT Trichy</a>, is a cluster of like-minded individuals pursuing projects in some of the booming technology sectors. The Tronix profile is a Spider division wherein we majorly work along the lines of Embedded Systems,  Electronics, IoT, Robotics and Simulation, Control Systems, Solid Modelling, Computer Vision, Artificial Intelligence, and many more. Apart from the R&D projects, we conduct μCON (mu-CON), a workshop exclusively for the first years of NIT Trichy every year. Generally, the workshop happens in the mid of the odd semester. Also, we conduct an event named CRE-8 in the middle of even semester every academic year exclusively for first years at college. 
                            <br/><br/>
                            Check out our <a href="https://github.com/orgs/spider-tronix/" alt="Visit Github Spider Tronix Organisation">Github organization</a> to see what we do or check out the <a href="/#projects" alt="Move to Projects Section">Projects</a> section for more info. 
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