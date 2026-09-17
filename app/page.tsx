// app/page.tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Benefits } from '@/components/sections/Benefits'
import { SocialProof } from '@/components/sections/SocialProof'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}