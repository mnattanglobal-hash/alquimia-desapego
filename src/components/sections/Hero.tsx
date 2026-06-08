import Eyebrow from "../ui/Eyebrow";
import Cta from "../ui/Cta";
import VslPlayer from "../ui/VslPlayer";

export default function Hero() {
  return (
    <section className="bg-hero-glow text-center pt-9 pb-16 md:pb-[84px]">
      <div className="wrap">
        <img
          src="/img/Alquimia-Logo-Horizontal-Gold.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[200px] sm:w-[224px] mb-6"
        />
        <Eyebrow className="mb-4">Desapego de Uma Vez</Eyebrow>

        <VslPlayer />

        <h1 className="text-[clamp(32px,7vw,52px)] mt-7 mb-[18px]">
          Tem uma pessoa que você não consegue parar de pensar.
          <br />
          <span className="text-gold">
            E isso está acabando com você por dentro.
          </span>
        </h1>
        <p className="text-[18px] max-w-[600px] mx-auto mb-[14px]">
          Uma prática guiada de menos de 15 minutos por dia pra você desapegar de
          quem está te tirando o sono — sem ficar esperando o tempo "curar
          sozinho".
        </p>
        <p className="text-[15px] text-muted-token max-w-[520px] mx-auto mb-[30px]">
          Funciona pra término recente, amor não correspondido ou alguém que se
          foi.
        </p>
        <Cta microcopy="Acesso imediato · 7 dias de garantia">
          QUERO DESAPEGAR DE UMA VEZ
        </Cta>
      </div>
    </section>
  );
}
