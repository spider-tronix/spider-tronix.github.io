import React from 'react';
import '../css/projects.css'
import $ from 'jquery'

function ReturnCard(repo){
    let projName = repo.name;
    let projDesc = repo.description;
    let projLink = repo.html_url;
    let topics = repo.topics;
    let ele = "<div class=\"proj_col\">"+
                "<div class=\"prjWrapper\">"+
                    "<div class=\"flip-card\">"+
                        "<div class=\"flip-card-inner\">"+
                            "<div class=\"flip-card-front\">"+
                                "<div class=\"projTitle\">"+projName+"</div>"+
                                "<div class=\"detialsIconCont\">";
    if(topics===undefined){
        ele = ele + "<div class=\"topicCont notopic\"> No topics found</div>";
    }
    else if(topics.length === 0){
        ele = ele + "<div class=\"topicCont notopic\"> No topics found</div>";
    }
    else{
        for(let i=0;i<topics.length;i++){
            ele = ele + "<div class=\"topicCont\">"+topics[i]+"</div>";
        }
    }
    ele = ele +                 "</div>"+
                            "</div>"+
                            "<div class=\"flip-card-back\">"+
                                "<div class=\"projTitle\">Description</div>"+
                                "<div class=\"projDesc\">";
    if(projDesc===null){
        ele = ele + "Loading.....";
    }
    else{
        ele = ele + projDesc;
    }
    ele = ele +                 "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class=\"utilCont\">"+
                        "<a href=\""+projLink+"\" target=\"_blank\" title=\"Know More\"><button class=\"knowMore_but\">Know More</button></a>"+
                    "</div>"+
                "</div>"+
            "</div>";
    return ele;

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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
    componentDidMount() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/orgs/spider-tronix/repos",
            async: true,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {"type":"all","sort":"full_name","per_page":100},
            beforeSend : function( xhr ) {
                xhr.setRequestHeader( "Accept", "application/vnd.github.v3+json;application/vnd.github.mercy-preview+json");
                xhr.setRequestHeader( "Authorization", "d85828f81d96d5c9fd3b6e35c76a6a7d5e4005cf" );
            },
            success: function(data, textStatus, xhr){
                if(xhr.status === 200){
                    for(let i=0;i<data.length;i++){
                        //console.log(data[i],data[i].topics);
                        $("#projRow").append(ReturnCard(data[i]));
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
        
    }
}

export default Project;