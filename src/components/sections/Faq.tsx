import { useState } from "react";
import Section from "../ui/Section";
import FlameDivider from "../ui/FlameDivider";

const faqs = [
  {
    q: "Quanto tempo leva?",
    a: "Menos de 15 minutos por dia. Muita mulher resolve em 7 dias. Os casos mais difíceis, em 21.",
  },
  {
    q: "Preciso saber alguma coisa de alquimia ou meditação?",
    a: "Nada. A Durga te guia passo a passo no áudio. Você só segue.",
  },
  {
    q: "Funciona pra qualquer tipo de apego?",
    a: "Sim. Término, amor não correspondido, alguém que faleceu ou se mudou. Você escolhe uma pessoa específica e trabalha ela.",
  },
  {
    q: "E se eu fizer e não funcionar?",
    a: "7 dias de garantia. Faz a primeira prática, se não mover nada em você, devolvo o dinheiro inteiro.",
  },
  {
    q: "Como recebo?",
    a: "Acesso imediato depois do pagamento, direto no seu celular. É seu pra sempre.",
  },
  {
    q: "É a mesma coisa que terapia?",
    a: "Não. Terapia trabalha a mente. Aqui a gente trabalha também a camada energética, os vínculos sutis que continuam te puxando mesmo depois que a cabeça já entendeu que acabou. Por isso só pensar não resolve.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section narrow band>
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-[22px]">
        Perguntas que toda mulher faz antes
      </h2>
      <div>
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="border-b border-[color:var(--hairline)] last:border-b-0 py-[22px]"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="font-display font-semibold text-[22px] text-accent-strong">
                  {item.q}
                </span>
                <span
                  className={`flex-none text-gold text-[26px] leading-[0.8] mt-1 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mb-0">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
