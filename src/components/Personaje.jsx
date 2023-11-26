import React from "react";

function Personaje({ personaje }) {
  return (
    <div className="p-3">
      <div className="card " style={{ width: "15rem"}}>
        <img
          src={personaje.image}
          className="card-img-top"
          alt={personaje.name}
        />
        <div className="card-body">
          <h5 className="card-title">{personaje.name}</h5>
          <p className="card-text">
            Especie: {personaje.species}, Género: {personaje.gender}, Estatus:{" "}
            {personaje.status}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Personaje;
