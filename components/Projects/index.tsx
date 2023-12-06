import { IProject } from "types";
import Fade from "components/animations/Fade";
import { Highlight, SectionTitle } from "components/shared/Typography.style";
import GithubIcon from "components/icons/GithubIcon";
import Project from "./Project";
import { ProjectsList, ProjectsStyled } from "./style";

const projects: IProject[] = [
  {
    img: "/images/smakownia.png",
    title: "Smakownia",
    desc: "Smakownia is an ambitious website project for a pizzeria, designed based on advanced microservices architecture. The platform offers users comfortable browsing and menu editing features, efficient shopping cart management, and access to a responsive interface.",
    href: "http://217.182.77.168:3000",
    links: [{Icon: GithubIcon, href: "https://github.com/smakownia/smakownia"}],
    badges: ["React", "Next.js", "ASP .NET core", "Docker", "JWT", "Tailwind", "Postgres", "Redis", "RabbitMQ", "DDD", "Micorservices", "CQRS"]
  },
  {
    img: "/images/audio-player.png",
    title: "Audio Player",
    desc: "Audio Player is a website that gives you access to songs from other users around the world.\n- Tracks adding/editing/deleting form\n- Tracks searching bar\n- Play next/prev track\n- Tracks are organized by genres",
    href: "https://audio-player.aruzo.it",
    links: [{ Icon: GithubIcon, href: "https://github.com/aruzo1/audio-player" }],
    badges: ["Next.js", "Nest.js", "Docker", "Styled Components", "Nginx", "PostgreSQL"]
  },
  {
    img: "/images/zontaz.png",
    title: "Zontaz",
    desc: "Website created for agency creating websites:\n- Landing page\n- Showcase\n- Contact form",
    href: "https://zontaz-portfolio.vercel.app/",
    links: [],
    badges: ["React", "Next.js", "TypeScript", "Tailwind", "Postgres"]
  },
  {
    img: "/images/cosmac.png",
    title: "Cosmac",
    desc: "Website created for nail salon to showcase the company.\n- Modal showing product details \n- Products organized by categories \n- Products searching bar",
    href: "https://cosmac.aruzo.it/",
    links: [{ Icon: GithubIcon, href: "https://github.com/aruzo1/cosmac" }],
    badges: ["Next.js", "Django Rest Framework", "TypeScript", "Tailwind"],
  },
  {
    img: "/images/pokedex.png",
    title: "Pokedex",
    desc: "Website created for Pokemon fans to showcase all pokemons.\n- Infinity scroll \n- Sorting filters",
    href: "https://pokemon-app.aruzo.it",
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
