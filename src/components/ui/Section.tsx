type SectionProps = {
  children: React.ReactNode;
  /** id da seção (ex.: "oferta") — alvo de âncora pros CTAs */
  id?: string;
  /** faixa de seção alternada (--band-bg) */
  band?: boolean;
  /** tom do bloco: claro (base) ou escuro (dramatiza) */
  tone?: "light" | "dark";
  narrow?: boolean;
  className?: string;
  /** centraliza o conteúdo do wrap */
  center?: boolean;
};

export default function Section({
  children,
  id,
  band = false,
  tone = "light",
  narrow = false,
  className = "",
  center = false,
}: SectionProps) {
  const toneClass = tone === "dark" ? "tone-dark" : "";
  const bandClass = band && tone !== "dark" ? "band" : "";

  return (
    <section
      id={id}
      className={`py-16 md:py-[84px] ${toneClass} ${bandClass} ${className} scroll-mt-4`}
    >
      <div className={`wrap ${narrow ? "narrow" : ""} ${center ? "text-center" : ""}`}>
        {children}
      </div>
    </section>
  );
}
