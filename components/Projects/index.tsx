import Image from "next/future/image";
import Fade from "components/animations/Fade";
import { Badge, BadgeGroup } from "components/shared/Badge.style";
import {
  Highlight,
  SectionTitle,
  Text,
} from "components/shared/Typography.style";
import { IconLink } from "components/shared/Link.style";
import GithubIcon from "components/icons/GithubIcon";
import {
  ProjectImgWrapper,
  Project,
  ProjectContent,
  ProjectsStyled,
  ProjectTitle,
} from "./style";

const projects = [
  {
    img: "/images/cosmac.png",
    title: "Cosmac",
    desc: "Website created for nail salon. Main features: \n-Modal showing product details \n-Products organized by categories \n-Products searching bar",
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
        <ul>
          {projects.map(({ title, desc, badges, img }) => (
            <Project key={title}>
              <ProjectContent>
                <ProjectTitle>
                  {title}
                  <IconLink
                    target="_blank"
                    href="https://github.com/aruzo1/cosmac"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </IconLink>
                </ProjectTitle>
                <Text>{desc}</Text>
                <BadgeGroup>
                  {badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </BadgeGroup>
              </ProjectContent>
              <ProjectImgWrapper>
                <Image src={img} alt="projekt" />
              </ProjectImgWrapper>
            </Project>
          ))}
        </ul>
      </ProjectsStyled>
    </Fade>
  );
}

export default Projects;
