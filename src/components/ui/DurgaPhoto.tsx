type DurgaPhotoProps = {
  /** descrição exata da foto que deve entrar aqui */
  description: string;
  /** rótulo do canto (default: foto da Durga; pode ser foto do casal) */
  label?: string;
  /** altura mínima do bloco */
  tall?: boolean;
  className?: string;
};

/**
 * PLACEHOLDER de foto real (não usar imagem de IA pra Durga/casal).
 * Marca claramente qual foto deve ser inserida neste ponto.
 * Usa a classe .photo (tokens) -> adapta sozinho ao tom claro/escuro da seção.
 */
export default function DurgaPhoto({
  description,
  label = "FOTO REAL DA DURGA (inserir)",
  tall = false,
  className = "",
}: DurgaPhotoProps) {
  return (
    <div
      className={`photo relative flex items-center justify-center text-center text-[13.5px] leading-relaxed px-6 py-7 ${
        tall ? "min-h-[300px]" : "min-h-[200px]"
      } ${className}`}
    >
      <span className="absolute top-3 left-[14px] font-eyebrow text-[10px] tracking-[0.2em] text-accent-strong">
        {label}
      </span>
      <span className="max-w-[440px]">{description}</span>
    </div>
  );
}
