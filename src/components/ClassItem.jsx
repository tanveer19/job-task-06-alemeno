import React from "react";

const ClassItem = ({ item }) => {
  const { name, image, price } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Meditation" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {name}</h2>
        <p>Description: {}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default ClassItem;
