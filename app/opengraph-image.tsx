// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site'

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#101716',
          padding: '80px',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gradiente radial superior derecha */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            background:
              'radial-gradient(circle, rgba(67,197,158,0.35) 0%, transparent 60%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(90deg, #43C59E, #258B73)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#101716',
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            Z
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              fontWeight: 700,
              color: '#F3F7F5',
            }}
          >
            Zora<span style={{ color: '#43C59E' }}>Pymes</span>
          </div>
        </div>

        {/* Contenido central — con wrap permitido */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            marginBottom: 'auto',
            maxWidth: 1000,
          }}
        >
          {/* Título en 2 bloques (uno por línea, sin depender del wrap automático) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#F3F7F5',
              letterSpacing: '-2px',
            }}
          >
            <span>Tu contabilidad, clara.</span>
            <span style={{ color: '#43C59E' }}>Sin saber contabilidad.</span>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 32,
              fontSize: 26,
              lineHeight: 1.4,
              color: '#9FB0AA',
              maxWidth: 820,
            }}
          >
            Facturas, impuestos y reportes. Con Copiloto IA. Para pymes y
            emprendedores.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#9FB0AA',
            fontSize: 22,
          }}
        >
          <span>zorapymes.com</span>
          <span style={{ color: '#43C59E', fontWeight: 600 }}>
            Empieza gratis →
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}