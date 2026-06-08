import Section from "../ui/Section";
import FlameDivider from "../ui/FlameDivider";
import Cta from "../ui/Cta";

export default function Oferta() {
  return (
    <Section id="oferta">
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-7">
        Tudo que entra no Desapego de Uma Vez
      </h2>

      <img
        src="/img/mockup_desapego_celular.png"
        alt="Desapego de Uma Vez no celular"
        className="block w-full max-w-[300px] mx-auto h-auto rounded-md border border-[color:var(--border)] shadow-[var(--card-shadow)] mb-7"
      />

      <div className="card border-gold max-w-narrow mx-auto" style={{ boxShadow: "0 0 28px rgba(176,128,48,0.18)" }}>
        <div className="text-center">
          <span className="inline-block font-eyebrow text-[10px] tracking-[0.14em] bg-gold text-brown-900 px-[10px] py-[3px] rounded-pill mb-[14px]">
            ACESSO IMEDIATO
          </span>
        </div>

        <ul className="bullets mb-0">
          <li>As 4 aulas em vídeo</li>
          <li>A prática alquímica guiada (áudio pra fazer todo dia)</li>
          <li>O manual de procedimentos (7, 14 ou 21 dias)</li>
          <li>Os decretos de sustentação</li>
          <li>O símbolo da prática pra imprimir</li>
          <li>Acesso imediato, no seu celular, pra sempre</li>
        </ul>

        <div className="mt-5 pt-5 text-center" style={{ borderTop: "1px solid var(--hairline)" }}>
          <span className="block font-display font-bold text-gold text-[48px] leading-none">
            R$147
          </span>
          <span className="text-muted-token">à vista, ou parcelado no cartão</span>
          <div className="mt-5">
            <Cta to="checkout">QUERO COMEÇAR AGORA</Cta>
          </div>
          <p className="text-muted-token text-[13px] mt-3">
            Acesso imediato · pagamento seguro · 7 dias de garantia
          </p>
        </div>
      </div>

      {/* Garantia */}
      <div className="text-center mt-12">
        <img
          src="/img/selo_garantia_incondicional.png"
          alt="Selo de garantia incondicional de 7 dias"
          className="block w-[140px] h-auto mx-auto mb-[18px]"
        />
        <h3 className="text-[22px] text-accent-strong mb-[8px]">
          7 dias de garantia incondicional.
          <br />O risco é meu, não seu.
        </h3>
        <p className="max-w-[560px] mx-auto mb-[14px] text-muted-token">
          Faz a primeira prática. Sente. Você tem 7 dias inteiros pra decidir. Se
          nesse tempo você não sentir nada se mover em você, é só mandar um e-mail
          pro nosso suporte. Não tem pergunta, não tem formulário, não tem letra
          miúda. Você não precisa justificar nada. A gente devolve cada centavo.
        </p>
        <p className="max-w-[560px] mx-auto mb-0 text-muted-token">
          Quem assume o risco de você experimentar sou eu. Se o Desapego de Uma
          Vez não te entregar o que eu prometi aqui, o problema é meu, não seu.
        </p>
        <p className="max-w-[520px] mx-auto mt-[14px] text-[13px] text-muted-token italic">
          Esses 7 dias somam ao seu direito de arrependimento garantido por lei.
          Você está coberta dos dois lados.
        </p>
      </div>
    </Section>
  );
}
