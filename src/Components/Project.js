import React from 'react';
import '../css/projects.css'
import $ from 'jquery'

function ReturnCard(name,desc,link){
        return "<div class=\"proj_col\">"+
                    "<div class=\"prjWrapper\">"+
                        "<div class=\"projTitle\">"+name+"</div>"+
                        "<div class=\"projDesc\">"+desc+"</div>"+
                        "<div class=\"utilCont\">"+
                            "<a href="+link+" target=\"_blank\" title=\"Know More\"><button class=\"knowMore_but\">Know More</button></a>"+
                        "</div>"+
                    "</div>"+
                "</div>";
}

function getTopics(URL){
    $.ajax({
        type: "GET",
        url: URL+"/topics",
        accepts: "application/vnd.github.mercy-preview+json", 
        async: true,
        beforeSend : function( xhr ) {
            xhr.setRequestHeader( "Accept","application/vnd.github.mercy-preview+json");
            xhr.setRequestHeader( "Authorization", "d85828f81d96d5c9fd3b6e35c76a6a7d5e4005cf" );
        },
        success: function(data, textStatus, xhr){
            if(xhr.status === 200){
                console.log(data);
            }
            else{
                console.log(xhr.status);
            }
        },
        error: function (textStatus, xhr, errorThrown) {
            console.log(errorThrown);
        }
    });
}
class Project extends React.Component{
    render(){
        return(
            <>
                <section id="projects" className="projectSec">
                    <div className="sec_container">
                        <div className="project_wrapper">
                            <div className="sec_head">Projects</div>
                            <br/><br/><br/>
                            <div className="sec_desc">
                                <div className="proj_row" id="projRow">
                                    <div className="proj_col">
                                        <div className="prjWrapper">
                                            <div className="projTitle">name</div>
                                            <div className="projDesc">desc</div>
                                            <div className="detialsIconCont">
                                                asas
                                            </div>
                                            <div className="utilCont">
                                                <a href="+link+" target="_blank" title="Know More"><button className="knowMore_but">Know More</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
    componentDidMount() {
        /*$.ajax({
            type: "GET",
            url: "https://api.github.com/orgs/spider-tronix/repos",
            accepts: "application/vnd.github.v3+json", 
            async: true,
            beforeSend : function( xhr ) {
                xhr.setRequestHeader( "Authorization", "d85828f81d96d5c9fd3b6e35c76a6a7d5e4005cf" );
            },
            success: function(data, textStatus, xhr){
                if(xhr.status === 200){
                    for(let i=0;i<data.length;i++){
                        console.log(data[i]);
                        $("#projRow").append(ReturnCard(data[i].name,data[i].description,data[i].html_url));
                        //getTopics(data[i].url);
                    }
                }
                else{
                    console.log(xhr.status);
                }
            },
            error: function (textStatus, xhr, errorThrown) {
                console.log(errorThrown);
            }
        });
        //getRepoDetails(data[i].url);*/
    }
}

export default Project;