import React from 'react';
import Header from '../Components/Header.js';
import Lander from '../Components/Lander.js';
import About from '../Components/About.js';
import Project from '../Components/Project.js';
import Members from '../Components/Members.js';
import Contact from '../Components/Contact.js';

class Home extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Lander/>
                <About/>
                <Project/>
                <Members/>
                <Contact/>
            </>
        );
    }
}

export default Home;
