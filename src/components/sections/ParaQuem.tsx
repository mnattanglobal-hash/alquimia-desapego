import Section from "../ui/Section";

export default function ParaQuem() {
  return (
    <Section>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="card">
          <h3 className="text-[22px] text-gold">É pra você se:</h3>
          <ul className="check mt-[14px] mb-0">
            <li>Tem uma pessoa específica que não sai da sua cabeça agora.</li>
            <li>Terminou faz pouco tempo e ainda dói fisicamente.</li>
            <li>Ama alguém que não te ama de volta e não consegue parar.</li>
            <li>
              Perdeu alguém (saiu da sua vida, foi morar longe, faleceu) e não
              consegue seguir.
            </li>
            <li>
              Já tentou se distrair, conversar com amiga, esperar passar — e não
              passou.
            </li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-[22px] text-danger">Não é pra você se:</h3>
          <ul className="cross mt-[14px] mb-0">
            <li>
              Você quer que essa pessoa volte. Aqui é pra você se soltar, não pra
              reconquistar.
            </li>
            <li>
              Você quer entender o padrão inteiro dos seus relacionamentos pra
              nunca mais repetir. Pra isso existe a Mecânica do Amor — aqui a gente
              para a hemorragia primeiro.
            </li>
            <li>
              Você não está disposta a fazer 15 minutos por dia. É pouco, mas é
              todo dia.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
