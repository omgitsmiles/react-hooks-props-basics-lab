import React from "react";

function Links(props) {
    return (
    <div>
        <h3>Links</h3>
        
        <div><a href="{props.github}">{props.github}</a></div>
        <a href="{props.linkedin}">{props.linkedin}</a>
    </div>
    )
}

export default Links