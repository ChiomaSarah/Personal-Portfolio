import {
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  QASection,
} from "@/app/components";
import ScrollButtons from "./ui/scrollButtons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <QASection />
      <Contact />
      <Footer />
      <ScrollButtons />
    </>
  );
}
