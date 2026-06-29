import Cta from "../ui/Cta";
import Quote from "../ui/Quote";
import FlameDivider from "../ui/FlameDivider";

export default function CtaFinal() {
  return (
    <section
      className="tone-dark text-center py-16 md:py-[84px]"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 100%, rgba(176,128,48,.14), transparent 60%), #0E0B08",
      }}
    >
      <div className="wrap narrow">
        <img
          src="img/Alquimia-Logo-Horizontal-OffWhite.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[180px] sm:w-[200px] mb-7"
        />
        <h2 className="text-[clamp(28px,6vw,40px)] mb-[22px]">
          Você pode esperar o tempo curar. Ou fazer 15 minutos hoje.
        </h2>
        <p className="mb-[18px]">
          Você pode continuar conferindo o celular pra ver se a pessoa mandou
          mensagem.
          Continuar relendo conversa antiga. Continuar esperando o tempo curar
          sozinho — e o tempo é lento, você já sabe.
        </p>
        <p className="mb-[18px]">
          Ou você pode fazer 15 minutos hoje e começar a se soltar de verdade.
        </p>
        <Quote className="text-left">
          "Eu jurei pra mim mesma que jamais passaria por isso de novo."
        </Quote>
        <p className="mb-7">
          Você não precisa esperar 1 ano como eu esperei.
        </p>
        <Cta to="checkout" microcopy="Acesso imediato · 7 dias de garantia · pagamento seguro">
          DESAPEGAR DE UMA VEZ
        </Cta>
        <FlameDivider flameOnly size={26} className="mt-9" />
      </div>
    </section>
  );
}
