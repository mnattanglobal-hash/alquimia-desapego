import Section from "../ui/Section";
import Quote from "../ui/Quote";

export default function Identificacao() {
  return (
    <Section band narrow>
      <h2 className="text-[clamp(28px,6vw,40px)] mb-[22px]">
        Você sabe que acabou. Mas ela não sai da sua cabeça.
      </h2>
      <p className="mb-[18px]">
        Você sabe que acabou. Todo mundo já te disse. Você mesma já disse.
      </p>
      <p className="mb-[18px]">
        Mas o nome dela continua aparecendo na sua cabeça do nada. No meio do
        trabalho. Antes de dormir. Quando você acorda, ela já está lá.
      </p>
      <p className="mb-[18px]">
        Você confere o celular pra ver se ela mandou alguma coisa. Não mandou.
        Você relê conversa antiga. Você inventa um motivo pra passar onde ela
        passa.
      </p>
      <p className="mb-[18px]">
        E a parte mais difícil de admitir: uma parte de você ainda espera ela
        voltar.
      </p>
      <p className="mb-[18px]">
        Você não está louca. E não é falta de força de vontade.
      </p>
      <Quote>
        "Literalmente, a pessoa vira uma droga e quando ela some, você entra em
        abstinência. O sentimento é de fraqueza, mas na verdade é química. E
        química pode ser reconfigurada."
      </Quote>
      <p className="mb-0">
        É isso que está acontecendo aí dentro. E tem como reconfigurar.
      </p>
    </Section>
  );
}
