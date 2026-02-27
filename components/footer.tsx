import { Flag } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Flag className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            AC Results
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Assetto Corsa Race Results Browser
        </p>
      </div>
    </footer>
  )
}
