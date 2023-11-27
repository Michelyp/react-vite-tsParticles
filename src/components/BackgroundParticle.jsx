import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particles-config";


function BackgroundParticle() {
  async function particlesInit(main) {
    //puede inicializar la instancia de tsParticles (main) aquí, agregando 
    //formas personalizadas o ajustes preestablecidos
    //Esto carga el paquete de TSParticles, es el método más fácil para tener todo listo
    await loadFull(main);
  }
  
  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
  );
}
export default BackgroundParticle;
