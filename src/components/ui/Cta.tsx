import { CHECKOUT_URL } from "../../config";

type CtaProps = {
  children: React.ReactNode;
  /**
   * "offer"  = rola suave até a seção de oferta (#oferta) — ponto único de conversão.
   * "checkout" = vai pro checkout real (CHECKOUT_URL). Usar só dentro da oferta / no fecho.
   */
  to?: "offer" | "checkout";
  microcopy?: string;
};

export default function Cta({ children, to = "offer", microcopy }: CtaProps) {
  const href = to === "checkout" ? CHECKOUT_URL : "#oferta";

  return (
    <div className="text-center">
      <a className="cta" href={href}>
        {children}
      </a>
      {microcopy && (
        <p className="text-muted-token text-[13.5px] mt-[14px]">{microcopy}</p>
      )}
    </div>
  );
}
