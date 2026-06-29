import Section from "../ui/Section";
import FlameDivider from "../ui/FlameDivider";
import AvatarPlaceholder from "../ui/AvatarPlaceholder";
import Cta from "../ui/Cta";

const numeros = [
  {
    n: "18 anos",
    t: "ajudando mulheres a sair de padrões de apego e relacionamentos tóxicos.",
  },
  {
    n: "22 nacionalidades",
    t: "alunos de mais de 15 países, atuação frequente na Europa desde 2015.",
  },
  {
    n: "Milhares",
    t: "de pessoas formadas e cuidadas pela Escola de Alquimia Ascensional.",
  },
];

const depoimentos: { nome: string; texto: string; avatar?: string }[] = [
  {
    nome: "Sarah",
    avatar: "img/avatar_sarah.png",
    texto:
      "O que mais mudou foi a autorresponsabilidade e a autonomia — parar com a dependência emocional, com a carência. Eu me sentia muito presa, aprisionada, naquele 'conforto desconfortável', e não conseguia enxergar. Depois consegui me libertar disso e isso mudou vários aspectos: vida amorosa, profissional.",
  },
  {
    nome: "Anna Rachel",
    avatar: "img/avatar_anna_rachel.jpg",
    texto:
      "Esse trabalho me libertou de uma relação de 15 anos tóxica e mal resolvida. Isso mudou tudo, amorosamente falando, na minha vida.",
  },
  {
    nome: "Maura",
    avatar: "img/avatar_maura.jpg",
    texto:
      "Eu era uma pessoa atormentada, uma pessoa triste, que tinha medo de tudo, muito contida. E o trabalho foi me libertando. Hoje eu me sinto muito leve.",
  },
];

export default function Prova() {
  return (
    <Section band>
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-7">
        Quem está te falando isso já cuidou de muita gente.
      </h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-8">
        {numeros.map((x) => (
          <div key={x.n} className="card text-center">
            <div className="font-display font-bold text-gold text-[26px] leading-tight mb-1">
              {x.n}
            </div>
            <p className="mb-0 text-[14px] text-muted-token">{x.t}</p>
          </div>
        ))}
      </div>

      <p className="text-center font-eyebrow text-[11px] tracking-[0.18em] text-accent-strong uppercase mb-5">
        Quem já passou por esse trabalho
      </p>

      <div className="grid gap-[18px] grid-cols-1 md:grid-cols-3">
        {depoimentos.map((d) => (
          <div key={d.nome} className="card">
            <p className="font-display italic text-[18px] leading-[1.4] mb-4">
              "{d.texto}"
            </p>
            <div className="flex items-center gap-3">
              {d.avatar ? (
                <img
                  src={d.avatar}
                  alt={d.nome}
                  className="flex-none w-[46px] h-[46px] rounded-full object-cover border border-[color:var(--border)]"
                />
              ) : (
                <AvatarPlaceholder name={d.nome} />
              )}
              <span className="text-[14px] text-accent-strong font-semibold not-italic">
                {d.nome}
                <span className="block text-[12px] text-muted-token font-normal">
                  aluna da Escola de Alquimia Ascensional
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Cta>QUERO DESAPEGAR DE UMA VEZ</Cta>
      </div>
    </Section>
  );
}
