import { Flag } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <Flag className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            AC Results
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#funkcje"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Funkcje
          </a>
          <a
            href="#polacz"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Połącz serwer
          </a>
        </nav>
      </div>
    </header>
  )
}
