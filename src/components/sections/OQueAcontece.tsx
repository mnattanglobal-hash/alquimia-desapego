import Section from "../ui/Section";
import Quote from "../ui/Quote";

const etapas = [
  {
    quando: "No primeiro dia",
    texto:
      "Alívio imediato. Muita mulher já chora durante a primeira prática — e é o processo trabalhando, é pra deixar acontecer.",
  },
  {
    quando: "Nos dias seguintes",
    texto:
      "As emoções suavizam. Os pensamentos sobre a pessoa vão perdendo força. As pessoas ao redor percebem antes de você.",
  },
  {
    quando: "Em 7 dias",
    texto: "Muita mulher já resolve por aqui.",
  },
  {
    quando: "Em 14 a 21 dias",
    texto: "Os casos mais difíceis se soltam.",
  },
];

export default function OQueAcontece() {
  return (
    <Section narrow>
      <h2 className="text-[clamp(28px,6vw,40px)] mb-[8px]">
        O que vai acontecer.
      </h2>
      <p className="text-muted-token mb-7">
        Não é teoria pra daqui a um ano. É pra agora.
      </p>

      <div className="card mb-7">
        {etapas.map((e, i) => (
          <div
            key={e.quando}
            className={`py-5 ${
              i < etapas.length - 1
                ? "border-b border-[color:var(--hairline)]"
                : ""
            }`}
          >
            <h3 className="text-[20px] text-accent-strong mb-[6px]">{e.quando}</h3>
            <p className="mb-0 text-muted-token">{e.texto}</p>
          </div>
        ))}
      </div>

      <p className="mb-[18px]">
        Você não vai virar pedra. Você não vai esquecer que amou. Você vai parar
        de ser refém.
      </p>
      <Quote>
        "Segurar alguém que quer ir é exatamente o oposto do amor próprio. Você
        não é mais criança."
      </Quote>
    </Section>
  );
}
