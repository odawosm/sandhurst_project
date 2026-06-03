// Mono eyebrow label with a short accent rule, used to head sections.
export default function Eyebrow({ children, className = "" }) {
  return (
    <span className={`label inline-flex items-center gap-3 text-accent ${className}`}>
      <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
      {children}
    </span>
  );
}
