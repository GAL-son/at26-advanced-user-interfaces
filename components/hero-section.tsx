import { Flag, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-card">
          <Flag className="h-8 w-8 text-primary" />
        </div>

        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Wyniki wyścigów{" "}
          <span className="text-primary">Assetto Corsa</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Połącz się z serwerem i przeglądaj klasyfikacje, czasy okrążeń oraz
          statystyki kierowców w jednym miejscu.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#polacz"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Połącz serwer
          </a>
          <a
            href="#funkcje"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
          >
            Zobacz funkcje
          </a>
        </div>
      </div>

      <a
        href="#funkcje"
        className="absolute bottom-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Przewiń w dół"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}
