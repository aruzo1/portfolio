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
    desc: "Website created for nail salon.\n- Modal showing product details \n- Products organized by categories \n- Products searching bar",
    href: "http://cosmac.aruzo.it/",
    links: [{ Icon: GithubIcon, href: "https://github.com/aruzo1/cosmac" }],
    badges: ["Next.js", "Django Rest Framework", "TypeScript", "Tailwind"],
  },
  {
    img: "/images/sincity.png",
    title: "Sincity Banditz",
    desc: "Website created for esport team SinCity Banditz.\n- Welcome section \n- Team section \n- Form sending emails",
    href: "https://esport-website.vercel.app/",
    links: [
      { Icon: GithubIcon, href: "https://github.com/aruzo1/sincity-banditz" },
    ],
    badges: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    img: "/images/pokedex.png",
    title: "Pokedex",
    desc: "Website created for Pokémon fans.\n- Infinity scroll \n- Sorting filters",
    href: "https://pokedex-aruzo1.vercel.app/",
    links: [
      { Icon: GithubIcon, href: "https://github.com/aruzo1/pokemon-app" },
    ],
    badges: ["Next.js", "GraphQL", "PokeAPI", "TypeScript", "Tailwind"],
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
          {projects.map((project, i) => (
            <Project key={project.title} {...project} right={i % 2 !== 0} />
          ))}
        </ProjectsList>
      </ProjectsStyled>
    </Fade>
  );
}

export default Projects;
