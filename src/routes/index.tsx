import { createFileRoute } from "@tanstack/react-router";
import { CyberBackground } from "@/components/CyberBackground";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Objective } from "@/components/sections/Objective";
import { Contact } from "@/components/sections/Contact";

const TITLE = "Yohan Clark — Cibersegurança, Redes e Python";
const DESC =
  "Portfólio de Yohan Clark: estudante de Análise e Desenvolvimento de Sistemas com foco em Cibersegurança, Redes e Python. Skills, projetos, formação e contato.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <CyberBackground />
      <SiteNav />
      <main>
        <Hero />
        <div className="relative">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Objective />
          <Contact />
        </div>
      </main>
    </div>
  );
}
