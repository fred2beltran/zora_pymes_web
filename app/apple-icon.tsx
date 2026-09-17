// app/apple-icon.tsx
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #43C59E 0%, #258B73 100%)',
          color: '#101716',
          fontSize: 120,
          fontWeight: 800,
          letterSpacing: '-4px',
        }}
      >
        Z
      </div>
    ),
    { ...size }
  )
}