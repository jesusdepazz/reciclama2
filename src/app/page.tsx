import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Materials } from "@/components/site/materials";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Credentials } from "@/components/site/credentials";
import { VideoShowcase } from "@/components/site/video-showcase";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { WhatsappFab } from "@/components/site/whatsapp-fab";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Materials />
        <Services />
        <About />
        <Credentials />
        <VideoShowcase />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  );
}
