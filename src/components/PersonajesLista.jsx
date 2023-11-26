//Permite hacer un render de la aplicación cuando cambie
import { useEffect, useState } from "react";
import React from "react";
import Personaje from "./Personaje";

function PersonajesLista() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      //await para indicarle que la consulta es asincrona y que va a devolver algo
      const response = await fetch(
        `https://rickandmortyapi.com/api/character`
      );
      //con formato JSON
      const data = await response.json();
      setLoading(false);
      //se guardara los datos dentro de setPersonajes
      setPersonajes(data.results);
    }
    getData();
  }, []);
  return (
    <div className="container ">
      {
        // En caso de que no se cargue los elementos se mostrara un mensaje
        loading ? (
          <h1>Esta cargando...</h1>
        ) : (
          <div className="row">
            {personajes.map((personaje) => {
              return (
                <div className="col-md-4" key={personaje.id}>
                  <Personaje key={personaje.id} personaje={personaje} />
                </div>
              );
            })}
          </div>
        )
      }
    </div>
  );
}

export default PersonajesLista;
