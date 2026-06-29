import { useEffect, useRef, useState } from "react";
import { VIDEO_URL } from "../../config";

const hasVideo = !!VIDEO_URL && !VIDEO_URL.startsWith("{{");
const isFile = /\.(mp4|webm|ogg)(\?|$)/i.test(VIDEO_URL);
const captionsUrl = VIDEO_URL.replace(/\.(mp4|webm|ogg)(\?.*)?$/i, ".vtt");

type VslPlayerProps = { label?: string };

/**
 * Player da VSL no topo da página (16:9 responsivo).
 * Vídeo .mp4 -> autoplay MUTADO + legenda (WebVTT, sempre visível) + botão de som.
 * Embed (YouTube/Vimeo) -> iframe. Sem VIDEO_URL -> placeholder marcado.
 */
export default function VslPlayer({
  label = "VSL da Durga (inserir vídeo)",
}: VslPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const showCaptions = () => {
      for (let i = 0; i < v.textTracks.length; i++) {
        v.textTracks[i].mode = "showing";
      }
    };
    showCaptions();
    v.addEventListener("loadedmetadata", showCaptions);
    v.play().catch(() => {});
    return () => v.removeEventListener("loadedmetadata", showCaptions);
  }, []);

  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  }

  if (hasVideo && isFile) {
    return (
      <div className="relative w-full aspect-video rounded-md overflow-hidden photo bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain bg-black"
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          controls
          preload="auto"
        >
          <track kind="captions" srcLang="pt" label="Português" default src={captionsUrl} />
        </video>
        {muted && (
          <button
            type="button"
            onClick={toggleSound}
            aria-label="Ativar som"
            className="absolute bottom-4 right-4 z-10 rounded-pill bg-gold text-brown-900 font-semibold text-[13px] px-4 py-2 shadow-glow-gold hover:bg-gold-light transition-colors"
          >
            🔊 Ativar som
          </button>
        )}
      </div>
    );
  }

  if (hasVideo && !isFile) {
    return (
      <div className="relative w-full aspect-video rounded-md overflow-hidden photo">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={VIDEO_URL}
          title="VSL — Alquimia Ascensional"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden photo">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span className="absolute top-3 left-[14px] font-eyebrow text-[10px] tracking-[0.2em] text-accent-strong">
          VÍDEO DE VENDAS
        </span>
        <span
          className="flex items-center justify-center rounded-full mb-3"
          style={{ width: 74, height: 74, background: "var(--accent)", boxShadow: "0 0 24px rgba(176,128,48,0.35)" }}
        >
          <svg width="26" height="30" viewBox="0 0 22 26" aria-hidden="true">
            <path d="M0 0l22 13L0 26z" fill="#1A130B" />
          </svg>
        </span>
        <span className="text-muted-token text-[13.5px] max-w-[360px]">{label}</span>
      </div>
    </div>
  );
}
