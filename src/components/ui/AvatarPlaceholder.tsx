type AvatarPlaceholderProps = {
  /** nome da depoente — usado pra marcar qual foto entra aqui */
  name: string;
};

/**
 * PLACEHOLDER de avatar de depoente. Sem imagem de IA.
 * Usa a classe .photo (tokens) -> adapta ao tom claro/escuro da seção.
 */
export default function AvatarPlaceholder({ name }: AvatarPlaceholderProps) {
  return (
    <span
      className="photo flex-none w-[46px] h-[46px] rounded-full flex items-center justify-center font-eyebrow text-[7px] tracking-[0.1em] text-accent-strong text-center leading-tight px-1"
      title={`FOTO REAL: ${name} (inserir)`}
    >
      FOTO {name}
    </span>
  );
}
