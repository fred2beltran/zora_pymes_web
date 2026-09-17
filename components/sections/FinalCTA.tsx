// components/sections/FinalCTA.tsx
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <Section bg="gradient">
      <div className="mx-auto max-w-2xl text-center text-[#101716]">
        <h2 className="text-2xl font-bold text-balance md:text-3xl">
          Empieza hoy. En 5 minutos.
        </h2>
        <p className="mt-4 text-md text-pretty opacity-90">
          Únete a las 12.000+ pymes que ya llevan su contabilidad sin saber
          contabilidad.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            as="link"
            href="/registro"
            size="lg"
            className="bg-[#101716] text-primary hover:bg-[#101716]/90"
          >
            Empieza gratis
          </Button>
          <Button
            as="link"
            href="/demo"
            variant="secondary"
            size="lg"
            className="border-[#101716]/30 text-[#101716] hover:border-[#101716] hover:text-[#101716]"
          >
            ▶ Ver demo de 2 min
          </Button>
        </div>

        <p className="mt-5 text-sm font-medium opacity-80">
          ✅ Sin tarjeta · ✅ Sin compromiso · ✅ Cancela cuando quieras
        </p>
      </div>
    </Section>
  )
}