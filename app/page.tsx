import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Partners } from '@/components/site/partners'
import { Specialties } from '@/components/site/specialties'
import { Reviews } from '@/components/site/reviews'
import { Faq } from '@/components/site/faq'
import { Location } from '@/components/site/location'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Partners />
      <Specialties />
      <Reviews />
      <Faq />
      <Location />
      <Footer />
    </main>
  )
}
