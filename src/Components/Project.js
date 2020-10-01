import React from 'react';
import '../css/projects.css'
import $ from 'jquery'
import ReactDOM from 'react-dom';

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
            type:"GET",
            url: "https://api.github.com/orgs/spider-tronix/repos",
            dataType: "json",
            accepts:"application/vnd.github.v3+json", 
            async: false,
            success: function(data, textStatus, xhr){
                if(xhr.status === 200){
                    for(let i=0;i<data.length;i++){
                        $("#projRow").append(ReturnCard(data[i].name,data[i].description,data[i].html_url));
                        //console.log(data[i]);
                    }
                }
            },
            error: function (textStatus, xhr, errorThrown) {
                $("#github").html(textStatus+" "+xhr.status+"  "+errorThrown);
            }
        });
    }
}

export default Project;