import React from 'react';
import '../css/header.css';
import Logo from '../assets/logo.png';
import $ from 'jquery'

let Script = () => import("../util/header.js");

class Header extends React.Component{
    render(){
        return(
            <header id="header" style={{}}>
                <div className="header_cont">
                    <div className="header_part header_logo" id="main_logo" style={{opacity: 1,transition: 'all 0.5s ease'}}>
                        <a href="/" style={{color:"#fff",textDecoration:'none'}} title="Spider Tronix">
                            <img src={Logo} alt="Header Logo" className="logo"/><span className="header_log_title">tronix</span>
                        </a>
                    </div>
                    <div className="header_part header_menu_cont">
                        <nav className="navbar nav-bar-o" id="hSideNavBar">
                            <ul className="nav nav_bar">
                                <li><a href="#home" className="h_menu_list list_special">Home</a></li>
                                <li><a href="#about" className="h_menu_list">About</a></li>
                                <li><a href="#projects" className="h_menu_list">Projects</a></li>
                                <li><a href="#members" className="h_menu_list">Members</a></li>
                                <li><a href="#contact" className="h_menu_list">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="h_menu_icon" id="menu_">
                            <div className="h_menu_bar"></div>
                            <div className="h_menu_bar" style={{width:33+"px"}}></div>
                            <div className="h_menu_bar"></div>
                        </div>
                    </div>
                    <div className="sidebar_cover" id="sdb_cvr"></div>
                    <div className="sidebar" id="sidebar">
                        <div className="close_sidebar">
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="sidebar_cont">
                            <div className="header_logo sdbr_head">Spider Tronix</div>
                            <nav className="navbar nav-bar-o">
                                <ul className="nav nav_bar_side">
                                    <li><a href="#home" className="h_menu_list ">Home</a></li>
                                    <li><a href="#about" className="h_menu_list">About</a></li>
                                    <li><a href="#projects" className="h_menu_list">Projects</a></li>
                                    <li><a href="#members" className="h_menu_list">Members</a></li>
                                    <li><a href="#contact" className="h_menu_list">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    componentDidMount(){
        Script();
        function show_sidebar() {
            document.getElementById("root").style.left="-290px";
            document.getElementById("header").style.marginLeft="-290px";
            document.getElementById("sdb_cvr").style.display="block";
            document.getElementById("sidebar").style.width="290px";
            document.getElementById("menu_").style.display="none";
        }
        
        function hide_side_bar() {
          document.getElementById("root").style.left="0px";
          document.getElementById("header").style.marginLeft="0px";
          document.getElementById("sdb_cvr").style.display="none";
          document.getElementById("sidebar").style.width="0px";
          document.getElementById("menu_").style.display="block";
        }        
        $("#menu_").on("click",show_sidebar);
        $(".close_sidebar").on("click",hide_side_bar);
        $("#sdb_cvr").on("click",hide_side_bar);
    }
}

export default Header;