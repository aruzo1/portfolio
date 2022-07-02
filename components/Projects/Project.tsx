import Image from "next/future/image";
import { IProject } from "types";
import { Text } from "components/shared/Typography.style";
import {
  ProjectContent,
  ProjectImgWrapper,
  ProjectStyled,
  ProjectTitle,
} from "./style";
import ProjectLinks from "./ProjectLinks";
import ProjectBadges from "./ProjectBadges";

function Project(props: IProject) {
  const { img, title, desc, links, badges } = props;

  return (
    <ProjectStyled>
      <ProjectContent>
        <ProjectTitle>
          {title} <ProjectLinks links={links} />
        </ProjectTitle>
        <Text>{desc}</Text>
        <ProjectBadges badges={badges} />
      </ProjectContent>
      <ProjectImgWrapper>
        <Image src={img} alt="projekt" />
      </ProjectImgWrapper>
    </ProjectStyled>
  );
}

export default Project;
