import React from 'react';
import '../css/members.css';
import $ from 'jquery';

function ReturnCard(name,avatar,plink){
    return "<div class=\"proj_col\">"+
                "<a href=\""+plink+"\" title=\"Click to visit Github Profile\">"+
                    "<div class=\"prjWrapper\">"+
                        "<div class=\"avatarCont\">"+
                            "<img src=\""+avatar+"\" alt=\"Avatar for \" />"+
                        "</div>"+
                        "<div class=\"projTitle\">"+name+"</div>"+
                    "</div>"+
                "</a>"+
            "</div>";
}

class Members extends React.Component{
    render(){
        return(
            <>
                <section id="members" className="memberSec">
                    <div className="sec_container">
                        <div className="member_wrapper">
                            <div className="sec_head">Members</div>
                            <br/><br/><br/>
                            <div className="sec_desc">
                                <div className="proj_row" id="memberRow">
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
            url: "https://api.github.com/orgs/spider-tronix/members",
            accepts: "application/vnd.github.v3+json", 
            async: true,
            dataType: "json",
            data: {"per_page" : 100},
            beforeSend : function( xhr ) {
                xhr.setRequestHeader( "Authorization", "d85828f81d96d5c9fd3b6e35c76a6a7d5e4005cf" );
            },
            success: function(data, textStatus, xhr){
                if(xhr.status === 200){
                    //console.log(data.length);
                    for(let i=0;i<data.length;i++){
                        //console.log(data[i]);
                        $("#memberRow").append(ReturnCard(data[i].login,data[i].avatar_url,data[i].html_url));
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

export default Members;