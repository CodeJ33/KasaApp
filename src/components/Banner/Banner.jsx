import React from "react";

export default function Banner({ image, texte }) {
  return (
    <div className="banner__container">
      <img className="banner__img" alt="bannière"  src={image} />
      <span className="banner__texte">{texte}</span>
    </div>
  );
}