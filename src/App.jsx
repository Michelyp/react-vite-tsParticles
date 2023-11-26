import PersonajesLista from "./components/PersonajesLista";
import BackgroundParticle from "./components/BackgroundParticle";

function App() {
  return (
    <>
    <div className="particlesContainer">
    <BackgroundParticle />
    </div>
      <div>
        <PersonajesLista />
      </div>
    </>
  );
}

export default App;
