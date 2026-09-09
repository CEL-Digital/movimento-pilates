import Hero from "./components/Hero";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WppIcon from "./components/WppIcon";
import { CookieBanner } from "./components/CookieBanner";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Team />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
      <WppIcon />
      <CookieBanner />
    </>
  );
}
