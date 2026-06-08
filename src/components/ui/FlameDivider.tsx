type FlameDividerProps = {
  /** mostra a chama acima da linha (default) ou só a chama isolada */
  size?: number;
  /** se true, mostra só a chama centralizada sem a linha divisória */
  flameOnly?: boolean;
  /** se true, mostra só a linha divisória sem a chama */
  lineOnly?: boolean;
  className?: string;
};

function Flame({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size / 24) * 32}
      viewBox="0 0 24 32"
      aria-hidden="true"
      className="block mx-auto opacity-95"
    >
      <path
        d="M12 0C12 6 18 9 18 16c0 1.2-.3 2.3-.8 3.2C18.7 18.4 20 16.4 20 14c4 6 2 18-8 18S0 22 4 14c0 2.4 1.3 4.4 2.8 5.2C6.3 18.3 6 17.2 6 16c0-5 4-7 4-12 1.5 1.5 2 3 2 5 0-3 0-6 0-9z"
        fill="#B08030"
      />
    </svg>
  );
}

function Line() {
  return (
    <div className="flex items-center justify-center gap-[14px] mt-2">
      <span
        className="h-px w-[70px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--border))" }}
      />
      <span
        className="h-px w-[70px]"
        style={{ background: "linear-gradient(90deg, var(--border), transparent)" }}
      />
    </div>
  );
}

export default function FlameDivider({
  size = 34,
  flameOnly = false,
  lineOnly = false,
  className = "",
}: FlameDividerProps) {
  return (
    <div className={className}>
      {!lineOnly && (
        <div className="mb-[18px]">
          <Flame size={size} />
        </div>
      )}
      {!flameOnly && <Line />}
    </div>
  );
}
