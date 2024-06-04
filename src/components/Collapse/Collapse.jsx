import React from "react";
import { useState } from "react";


const Collapse = ({title, content}) => {
    const[dropOpen, setDrop] = useState(false);

    const displayDrop =() =>{
        setDrop(!dropOpen);
    };

    
      return (
      <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title" onClick={displayDrop}>
        <h2>{title}</h2>
        <p>
          <i className={`fa-solid ${dropOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </p>
      </div>
      <div className="collapse__dropdown__content">
        {dropOpen && <div className="collapse__dropdown__text">{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;