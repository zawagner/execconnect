import { Hero } from "./components/Hero.jsx";
import { Feature } from "@/components/Feature.jsx";
import { Integration } from "@/components/Integration.jsx";
import { Pricing } from "@/components/Pricing.jsx";
import { Topbar } from "@/components/Topbar.jsx";
import { FAQ } from "@/components/FAQ.jsx";
import { Footer } from "@/components/Footer.jsx";
import { ThemeToggler } from "@/components/ThemeToggler.jsx";
import { Theme, useTheme } from "react-daisyui";

function App() {
  const { theme } = useTheme();

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
  );
}

export default App;
