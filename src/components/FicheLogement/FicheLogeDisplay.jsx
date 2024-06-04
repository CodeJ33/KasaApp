import React from "react";
import { useParams } from "react-router-dom";
import dataLogement from "../../datas/logements.json";
import Slider from "../../components/Carroussel/Carroussel";
import Tags from "./Tags";
import Host from "./Host";
import Rate from "./Rate";
import Collapse from "../Collapse/Collapse";

const FicheLogeDisplay = () => {
  const { id } = useParams();

  const ficheloge = dataLogement.find((logement) => logement.id === id);

  const tags = ficheloge?.tags.map((tag, index) => {
    return <Tags key={index} name={tag} />;
  });

  const equipments = ficheloge?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
      
  });

  return (
    <div>
      <Slider slides={ficheloge.pictures} />
      <div className="fichelogContainer">
        <div className="fichelogContainerText">
        <h1>{ficheloge.title}</h1>
        <span className="ficheTextlocation">{ficheloge?.location}</span>
        <div className="tagsContainer">{tags}</div>
        </div>
        <aside className="hostContainer">
          <Host
            name={ficheloge?.host.name}
            picture={ficheloge?.host.picture}
          />
          <Rate scoring={ficheloge.rating} />
        </aside>
      </div>
      <div className="collapseContainer">
        <div className="collapse__description">
          <Collapse title="Description" content={ficheloge?.description} />
        </div>
        <div className="collapse__equipments">
          <Collapse title="Equipements" content={<ul>{equipments}</ul>}/>
        </div>
      </div>
    </div>
  );
};

export default FicheLogeDisplay;
