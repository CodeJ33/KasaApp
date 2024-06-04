import React from "react";

function Tags ({ name }) {
    return (
        <div className="tagsDiv">
            <span className="tagsDiv__button">{name}</span>
        </div>
    );
}

export default  Tags;