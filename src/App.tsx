import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./page/Home";
import { Projects } from "./page/Project";
import { ProjectDetail } from "./page/ProjectDetail";
import { About } from "./page/About";
import { Certifications } from "./page/Certification";
import { Contact } from "./page/Contact";
import { Educations } from "./page/Education";
import { Experiences } from "./page/Experience";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="educations" element={<Educations />} />
          <Route path="experience" element={<Experiences />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
