import { ContactProvider } from "@/components/ContactContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Team from "@/components/Team";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactOverlay from "@/components/ContactOverlay";

export default function Home() {
  return (
    <ContactProvider>
      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <Blurb />
        <Stats />
        <Services />
        <Team />
        <About />
        <CTA />
        <Footer />
        <ContactOverlay />
      </main>
    </ContactProvider>
  );
}
