"use client"

import { useState } from "react"
import { Server, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ConnectSection() {
  const [address, setAddress] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function handleConnect(e: React.FormEvent) {
    e.preventDefault()

    if (!address.trim()) {
      setStatus("error")
      setErrorMessage("Podaj adres serwera")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    // Simulate connection attempt
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <section id="polacz" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left side - info */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Połącz serwer
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Podaj adres serwera i zacznij przeglądać wyniki
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Wpisz adres HTTP serwera Assetto Corsa z włączonym interfejsem
              webowym. Aplikacja automatycznie pobierze dostępne dane o sesjach,
              kierowcach i wynikach.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Wpisz adres serwera
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {"Np. http://192.168.1.100:8772 lub adres domenowy"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Połącz się z serwerem
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aplikacja sprawdzi dostępność i pobierze dane
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Przeglądaj wyniki
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Analizuj czasy okrążeń, klasyfikacje i statystyki
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Połącz z serwerem
                </h3>
                <p className="text-sm text-muted-foreground">
                  Assetto Corsa Server Manager
                </p>
              </div>
            </div>

            <form onSubmit={handleConnect} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="server-address"
                  className="text-sm font-medium text-foreground"
                >
                  Adres serwera
                </label>
                <Input
                  id="server-address"
                  type="text"
                  placeholder="http://192.168.1.100:8772"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  className="bg-secondary text-foreground placeholder:text-muted-foreground"
                />
                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMessage}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="server-port"
                  className="text-sm font-medium text-foreground"
                >
                  Port HTTP
                  <span className="ml-1 text-muted-foreground">(opcjonalnie)</span>
                </label>
                <Input
                  id="server-port"
                  type="text"
                  placeholder="8772"
                  className="bg-secondary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Łączenie...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Połączono
                  </>
                ) : (
                  <>
                    Połącz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {status === "success" && (
              <div className="mt-4 rounded-md border border-primary/30 bg-primary/5 p-4">
                <p className="text-sm font-medium text-primary">
                  Pomyślnie połączono z serwerem!
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Przekierowanie do panelu wyników...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
