import Image from "next/future/image";
import { Badge, BadgeGroup } from "components/shared/Badge.style";
import {
  Highlight,
  SectionTitle,
  Text,
} from "components/shared/Typography.style";
import {
  ImgWrapper,
  Project,
  ProjectContent,
  ProjectsStyled,
  ProjectTitle,
} from "./style";

const projects = [
  {
    img: "/cosmac.png",
    title: "Cosmac",
    desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    badges: ["Next.js", "Django Rest Framework", "TypeScript", "Tailwind"],
  },
];

function Projects() {
  return (
    <ProjectsStyled id="projects">
      <SectionTitle>
        <Highlight>My</Highlight> Projects
      </SectionTitle>
      <ul>
        {projects.map(({ title, desc, badges, img }) => (
          <Project key={title}>
            <ProjectContent>
              <ProjectTitle>{title}</ProjectTitle>
              <Text>{desc}</Text>
              <BadgeGroup>
                {badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </BadgeGroup>
            </ProjectContent>
            <ImgWrapper>
              <Image src={img} alt="projekt" />
            </ImgWrapper>
          </Project>
        ))}
      </ul>
    </ProjectsStyled>
  );
}

export default Projects;
