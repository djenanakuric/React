import React from "react";

const userCard = (props) => {
    console.log(props)
    return ( 
        <div className="ui card">
            <div className="content">
                <div className="header">
                    Alex Tackihi
                </div>
                <div className="description">
                 {props.children}
                </div>
            </div>

            <div className="ui button button"> 
                <i className="add icon">
                     Add Friend
                </i>
            </div>
        </div>
    )
}

export default userCard;