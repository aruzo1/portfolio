import { IProject } from "types";
import Fade from "components/animations/Fade";
import { Highlight, SectionTitle } from "components/shared/Typography.style";
import GithubIcon from "components/icons/GithubIcon";
import Project from "./Project";
import { ProjectsList, ProjectsStyled } from "./style";

const projects: IProject[] = [
  {
    img: "/images/cosmac.png",
    title: "Cosmac",
    desc: "Website created for nail salon. Main features: \n-Modal showing product details \n-Products organized by categories \n-Products searching bar",
    links: [{ Icon: GithubIcon, href: "https://github.com/aruzo1/cosmac" }],
    badges: ["Next.js", "Django Rest Framework", "TypeScript", "Tailwind"],
  },
];

function Projects() {
  return (
    <Fade>
      <ProjectsStyled id="projects">
        <SectionTitle>
          <Highlight>My</Highlight> Projects
        </SectionTitle>
        <ProjectsList>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ProjectsList>
      </ProjectsStyled>
    </Fade>
  );
}

export default Projects;
