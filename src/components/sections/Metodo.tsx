import Section from "../ui/Section";
import Quote from "../ui/Quote";
import Cta from "../ui/Cta";

export default function Metodo() {
  return (
    <Section band narrow>
      <h2 className="text-[clamp(28px,6vw,40px)] mb-[22px]">
        Não é autoajuda. É uma prática que reconfigura o que te prende.
      </h2>
      <p className="mb-[18px]">
        O Desapego de Uma Vez não é livro de autoajuda pra ler e esquecer. Não é
        meditação relaxante de fundo. Não é frase positiva que não leva a lugar
        nenhum.
      </p>
      <p className="mb-[18px]">
        É uma prática alquímica guiada que reconfigura as sinapses neurais e
        emocionais que te prendem nessa pessoa. Energia se trabalha com energia.
      </p>
      <p className="mb-[18px]">
        Você faz menos de 15 minutos por dia. É só seguir o áudio guiado.
      </p>

      <div className="card my-7">
        <p className="font-eyebrow text-[11px] tracking-[0.18em] text-accent-strong uppercase mb-4">
          O que tem dentro
        </p>
        <ul className="bullets mb-0">
          <li>
            <strong>4 vídeos diretos</strong> — apresentação, como o apego funciona
            aí dentro de você, a preparação e a prática guiada (o coração do
            método).
          </li>
          <li>
            <strong>A prática alquímica guiada</strong> — o áudio que você segue
            todo dia, escolhendo uma pessoa específica de quem você quer
            desapegar.
          </li>
          <li>
            <strong>Manual de procedimentos</strong> — passo a passo de como
            conduzir a prática por 7, 14 ou 21 dias.
          </li>
          <li>
            <strong>Decretos</strong> — frases pra usar de manhã, tarde e noite pra
            sustentar o desapego no dia a dia.
          </li>
        </ul>
      </div>

      <p className="mb-[18px]">
        Tudo no seu celular. Acesso imediato depois da compra.
      </p>
      <Quote>
        "Desapego não é indiferença. Desapegar não significa que você não vai
        sentir, significa recuperar a sua soberania emocional, significa que você
        se ama o suficiente pra não aceitar migalhas."
      </Quote>

      <div className="mt-8">
        <Cta>QUERO COMEÇAR ISSO</Cta>
      </div>
    </Section>
  );
}
