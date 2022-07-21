import Image from "next/future/image";
import { IProject } from "types";
import Fade from "components/animations/Fade";
import { LinkStyled } from "components/shared/Link.style";
import { Text } from "components/shared/Typography.style";
import ProjectLinks from "./ProjectLinks";
import ProjectBadges from "./ProjectBadges";
import {
  ProjectContent,
  ProjectImgWrapper,
  ProjectStyled,
  ProjectTitle,
} from "./style";

function Project(props: IProject) {
  const { img, title, desc, href, links, badges, right } = props;

  return (
    <Fade>
      <ProjectStyled>
        <ProjectContent right={right}>
          <ProjectTitle>
            <LinkStyled target="_blank" href={href}>
              {title}
            </LinkStyled>
            <ProjectLinks links={links} />
          </ProjectTitle>
          <Text>{desc}</Text>
          <ProjectBadges badges={badges} />
        </ProjectContent>
        <ProjectImgWrapper right={right}>
          <Image src={img} alt="project" />
        </ProjectImgWrapper>
      </ProjectStyled>
    </Fade>
  );
}

export default Project;
