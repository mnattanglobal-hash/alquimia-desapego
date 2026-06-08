type QuoteProps = {
  children: React.ReactNode;
  className?: string;
};

/** Citação verbatim da Durga. Texto NÃO deve ser alterado. */
export default function Quote({ children, className = "" }: QuoteProps) {
  return <blockquote className={`quote ${className}`}>{children}</blockquote>;
}
