import {
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  QAProjects,
} from "@/app/components";
import ScrollButtons from "./ui/scrollButtons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <QAProjects />
      <Contact />
      <Footer />
      <ScrollButtons />
    </>
  );
}
