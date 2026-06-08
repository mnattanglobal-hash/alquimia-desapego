import { VIDEO_URL } from "../../config";

type VslPlayerProps = {
  /** rótulo do placeholder enquanto não há vídeo real */
  label?: string;
};

const hasVideo = !!VIDEO_URL && !VIDEO_URL.startsWith("{{");

/**
 * Player da VSL no topo da página (16:9 responsivo).
 * Sem VIDEO_URL real -> placeholder marcado com botão de play (sem rosto de IA).
 * Com VIDEO_URL (embed YouTube/Vimeo ou .mp4) -> renderiza o player de verdade.
 * Reutilizável: a LP do Desapego usa o mesmo componente.
 */
export default function VslPlayer({
  label = "VSL da Durga (inserir vídeo)",
}: VslPlayerProps) {
  const isFile = /\.(mp4|webm|ogg)(\?|$)/i.test(VIDEO_URL);

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden photo">
      {hasVideo ? (
        isFile ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={VIDEO_URL}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={VIDEO_URL}
            title="VSL — A Mecânica do Amor"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="absolute top-3 left-[14px] font-eyebrow text-[10px] tracking-[0.2em] text-accent-strong">
            VÍDEO DE VENDAS
          </span>
          {/* botão de play */}
          <span
            className="flex items-center justify-center rounded-full mb-3"
            style={{
              width: 74,
              height: 74,
              background: "var(--accent)",
              boxShadow: "0 0 24px rgba(176,128,48,0.35)",
            }}
          >
            <svg width="26" height="30" viewBox="0 0 22 26" aria-hidden="true">
              <path d="M0 0l22 13L0 26z" fill="#1A130B" />
            </svg>
          </span>
          <span className="text-muted-token text-[13.5px] max-w-[360px]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
