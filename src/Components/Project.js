import React from 'react';
import '../css/projects.css'
import $ from 'jquery'

function getColor(lang){
    if(lang === "Verilog")
        return "#b2b7f8";
    else if(lang === "C++")
        return "#f34b7d";
    else if(lang === "Jupyter Notebook")
        return "#DA5B0B";
    else if(lang === "MATLAB")
        return "#e16737";
    else if(lang === "JavaScript")
        return "#f1e05a";
    else if(lang === "C")
        return "#555555";
    else if(lang === "C#")
        return "#178600";
    else if(lang === "Python")
        return "#3572A5";
    else
        return "grey";
}
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
    ele = ele +                 "<br/>";                           
                                if(repo.archived === true){
                                    ele = ele + "<div class=\"topicCont archived\">Repository Archived</div>";
                                } 
    ele = ele +                 "<div class=\"langLic\">"+
                                    "<span class=\"mr-3\">"+
                                        "<span class=\"repo-language-color\" style=\"background-color: "+getColor(repo.language)+"\"></span>"+
                                        "<span class=\"programmingLanguage\">"+repo.language+"</span>"+
                                    "</span>";
                                    if(repo.license != null){
                                        ele = ele + "<span class=\"mr-3\">"+
                                                            "<svg mr=\"1\" height=\"16\" class=\"lisc_icon\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z\"></path></svg>"+
                                                            repo.license.spdx_id+
                                                    "</span>";
                                    }
    ele = ele +                 "</div>";               
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
                        console.log(data[i],data[i].topics);
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