import React from 'react';
import Header from '../Components/Header.js';
import Lander from '../Components/Lander.js';
import About from '../Components/About.js';

class Home extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Lander/>
                <About/>
            </>
        );
    }
}

export default Home;
