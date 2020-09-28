import React from 'react';
import '../css/header.css';
import Logo from '../assets/logo.png';

class Header extends React.Component{
    render(){
        return(
            <header id="header" style={{}}>
                <div className="header_cont">
                    <div className="header_part header_logo" id="main_logo" style={{opacity: 1,transition: 'all 0.5s ease'}}>
                        <a href="/" style={{color:"#fff",textDecoration:'none'}}>
                            <img src={Logo} alt="" className="logo"/>
                        </a>
                    </div>
                    <div className="header_part header_menu_cont">
                        <nav className="navbar nav-bar-o">
                        <ul className="nav nav_bar">
                            <li><a href="#home" className="h_menu_list list_special">Home</a></li>
                            <li><a href="#about" className="h_menu_list">About</a></li>
                            <li><a href="#projects" className="h_menu_list">Projects</a></li>
                            <li><a href="#resume" className="h_menu_list">Members</a></li>
                            <li><a href="#contact" className="h_menu_list">Contact</a></li>
                        </ul>
                        </nav>
                        <div className="h_menu_icon" id="menu_">
                            <div className="h_menu_bar"></div>
                            <div className="h_menu_bar"></div>
                            <div className="h_menu_bar"></div>
                        </div>
                    </div>
                    <div className="sidebar_cover" id="sdb_cvr"></div>
                    <div className="sidebar" id="sidebar">
                        <div className="close_sidebar">
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="sidebar_cont">
                            <div className="header_logo">Aditya Kumar Singh</div>
                            <nav className="navbar nav-bar-o">
                                <ul className="nav nav_bar_side">
                                    <li><a href="#home" className="h_menu_list ">Home</a></li>
                                    <li><a href="#about" className="h_menu_list">About</a></li>
                                    <li><a href="#projects" className="h_menu_list">Projects</a></li>
                                    <li><a href="#resume" className="h_menu_list">Members</a></li>
                                    <li><a href="#contact" className="h_menu_list">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;