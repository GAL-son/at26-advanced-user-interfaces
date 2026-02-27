import {
  Trophy,
  Timer,
  Users,
  BarChart3,
  Gauge,
  History,
} from "lucide-react"

const features = [
  {
    icon: Trophy,
    title: "Klasyfikacja wyścigów",
    description:
      "Przeglądaj pełne wyniki sesji wyścigowych z podziałem na kwalifikacje, wyścig i trening.",
  },
  {
    icon: Timer,
    title: "Czasy okrążeń",
    description:
      "Szczegółowa analiza czasów okrążeń każdego kierowcy — najlepsze okrążenie, średnia i sektory.",
  },
  {
    icon: Users,
    title: "Statystyki kierowców",
    description:
      "Śledź postępy kierowców, ich historię wyścigów i porównuj wyniki z innymi.",
  },
  {
    icon: BarChart3,
    title: "Wizualizacja danych",
    description:
      "Wykresy i tabele, które pozwalają szybko zrozumieć przebieg sesji i tempo jazdy.",
  },
  {
    icon: Gauge,
    title: "Dane w czasie rzeczywistym",
    description:
      "Połącz się z aktywnym serwerem i obserwuj wyniki na bieżąco podczas trwającej sesji.",
  },
  {
    icon: History,
    title: "Historia sesji",
    description:
      "Przeglądaj archiwalne wyniki z poprzednich sesji i porównuj swoje postępy w czasie.",
  },
]

export function FeaturesSection() {
  return (
    <section id="funkcje" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Funkcje
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Wszystko, czego potrzebujesz do analizy wyścigów
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Kompletny zestaw narzędzi do przeglądania i analizowania wyników z
            serwerów Assetto Corsa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
