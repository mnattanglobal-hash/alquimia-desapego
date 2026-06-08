import Hero from "./components/sections/Hero";
import Identificacao from "./components/sections/Identificacao";
import Historia from "./components/sections/Historia";
import Metodo from "./components/sections/Metodo";
import OQueAcontece from "./components/sections/OQueAcontece";
import Prova from "./components/sections/Prova";
import Oferta from "./components/sections/Oferta";
import ParaQuem from "./components/sections/ParaQuem";
import Faq from "./components/sections/Faq";
import CtaFinal from "./components/sections/CtaFinal";

export default function App() {
  return (
    <main>
      <Hero />
      <Identificacao />
      <Historia />
      <Metodo />
      <OQueAcontece />
      <Prova />
      <Oferta />
      <ParaQuem />
      <Faq />
      <CtaFinal />
    </main>
  );
}
