import React from "react";
import Card from "../Cards/Cards";
import datas from "../../datas/logements.json";

const Gallery = () => {
    return (
        <div className="card-section">
            {datas.map((data) =>{
                return(
                   
                    <Card key={data.id} image={data.cover} 
                    title={data.title}
                    link={`/logement/${data.id}`} 
                    />
                    
                );
            })}
            </div>
  );
};

export default Gallery;