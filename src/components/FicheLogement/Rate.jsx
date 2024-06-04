import React from "react";


export default function Rate(props) {
  const scoring = props.scoring;
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="ratingDiv">
      {ratings.map((rating) => (
        scoring >= rating ? (
          <i key={rating.toString()} className="fa fa-star fullStar"></i>
        ) : (
          <i key={rating.toString()} className="fa fa-star emptyStar"></i>
        )
      ))}
    </div>
  );
}
