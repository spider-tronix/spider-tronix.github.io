import React from 'react'
import Header from '../Components/Header.js'
import Lander from '../Components/Lander.js'

class Home extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Lander/>
            </>
        );
    }
}

export default Home;
