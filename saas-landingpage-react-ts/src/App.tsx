import { Hero } from './components/Hero.tsx'
import { Feature } from '@/components/Feature.tsx'
import { Integration } from '@/components/Integration.tsx'
import { Pricing } from '@/components/Pricing.tsx'
import { Topbar } from '@/components/Topbar.tsx'
import { FAQ } from '@/components/FAQ.tsx'
import { Footer } from '@/components/Footer.tsx'
import { ThemeToggler } from '@/components/ThemeToggler.tsx'
import { Theme, useTheme } from 'react-daisyui'

function App() {
  const { theme } = useTheme()

  return (
    <>
      <Theme dataTheme={theme}>
        <Topbar />
        <Hero />
        <Feature />
        <Integration />
        <Pricing />
        <FAQ />
        <Footer />
        <ThemeToggler />
      </Theme>
    </>
  )
}

export default App
