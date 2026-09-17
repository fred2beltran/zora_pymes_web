// app/copiloto-ia/AICTA.tsx
import { Section } from '@/components/ui/Section'

export function AICTA() {
  return (
    <Section bg="gradient" className="bg-grad-ai">
      <div className="mx-auto max-w-2xl text-center text-[#101716]">
        <h2 className="text-2xl font-bold text-balance md:text-3xl">
          Dale a tu contabilidad un copiloto.
        </h2>
        <p className="mt-4 text-md text-pretty opacity-90">
          Pruébalo gratis durante 14 días. Sin tarjeta. Sin compromiso.
          Pregúntale lo que quieras.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/registro"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-[#101716] px-8 text-lg font-semibold text-ai transition-opacity hover:opacity-90"
          >
            Probar el Copiloto gratis
          </a>
          <a
            href="/precios"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-[#101716]/30 px-8 text-lg text-[#101716] transition-colors hover:border-[#101716]"
          >
            Ver planes
          </a>
        </div>

        <p className="mt-5 text-sm font-medium opacity-80">
          ✅ Incluido en Pro y Business · ✅ Cancela cuando quieras
        </p>
      </div>
    </Section>
  )
}