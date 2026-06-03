import Link from "next/link";

// Brand button. Variants: solid (accent), outline (cream hairline), ghost.
const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-mono text-xs uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-2";

const sizes = {
  md: "px-6 py-3.5",
  sm: "px-5 py-2.5",
  lg: "px-8 py-4",
};

const variants = {
  solid:
    "bg-accent text-night hover:bg-cream hover:shadow-[0_8px_30px_-12px_rgba(220,246,158,0.6)]",
  outline:
    "border border-line-strong text-cream hover:border-accent hover:text-accent",
  ghost: "text-cream/80 hover:text-accent",
};

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  arrow = false,
  className = "",
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("/brochure");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
