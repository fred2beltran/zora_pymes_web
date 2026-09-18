// components/visuals/DashboardMockup.tsx
import { Badge } from '@/components/ui/Badge'

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow decorativo detrás */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-grad-primary opacity-20 blur-3xl"
      />

      {/* Card principal */}
      <div className="relative rounded-lg border border-line bg-surface p-5 shadow-md">
        {/* Barra superior */}
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <span className="text-xs text-muted">zorapymes.com/dashboard</span>
        </div>

        {/* Contenido */}
        <div className="mt-4 space-y-4">
          {/* Header interno */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Hola, María 👋</p>
              <p className="text-md font-semibold">Tu resumen de marzo</p>
            </div>
            <Badge variant="completed">✅ Al día</Badge>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-md border border-line bg-bg p-3">
              <p className="text-xs text-muted">Ingresos</p>
              <p className="mt-1 text-lg font-semibold text-primary">
                $12.480
              </p>
              <p className="text-xs text-success">+18% vs feb</p>
            </div>
            <div className="rounded-md border border-line bg-bg p-3">
              <p className="text-xs text-muted">Gastos</p>
              <p className="mt-1 text-lg font-semibold">$4.210</p>
              <p className="text-xs text-muted">-3% vs feb</p>
            </div>
            <div className="rounded-md border border-line bg-bg p-3">
              <p className="text-xs text-muted">Beneficio</p>
              <p className="mt-1 text-lg font-semibold">$8.270</p>
              <p className="text-xs text-success">+24% vs feb</p>
            </div>
          </div>

          {/* Barra gráfica ficticia */}
          <div className="rounded-md border border-line bg-bg p-3">
            <div className="flex items-end justify-between gap-1.5 h-20">
              {[40, 55, 35, 70, 62, 80, 58, 90, 74, 88, 95, 82].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-grad-primary"
                    style={{ height: `${h}%`, opacity: 0.85 }}
                  />
                )
              )}
            </div>
            <p className="mt-2 text-xs text-muted">
              Evolución últimos 12 meses
            </p>
          </div>

          {/* Copiloto IA */}
          <div className="rounded-md border border-ai/50 bg-[#2A2340]/60 p-3">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grad-ai text-sm">
                ✨
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#E7E1FF] font-semibold">
                  Copiloto Zora
                </p>
                <p className="mt-1 text-xs text-[#E7E1FF]/80">
                  Este mes pagas $620 de IVA. Te aviso 5 días antes. ¿Lo
                  reservamos?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}