import { Contact, Footer, Header, Hero, Projects } from "@/components";
import ScrollButtons from "./ui/scrollButtons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButtons />
    </>
  );
}
