import Image from "next/future/image";
import {
  Highlight,
  SectionTitle,
  Text,
} from "components/shared/Typography.style";
import { Badge, BadgeGroup } from "components/shared/Badge.style";
import { AboutBody, AboutStyled, AboutText, ImgWrapper } from "./style";

const technologies = [
  "HTML",
  "JavaScript",
  "CSS",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Nuxt.js",
  "MySQL",
  "GraphQL",
  "REST",
];

function About() {
  return (
    <AboutStyled id="about">
      <SectionTitle>
        About <Highlight>Me</Highlight>
      </SectionTitle>
      <AboutBody>
        <AboutText>
          <Text>
            Hello, my name is David and I love developing websites. I&quot;m
            programming since I was 13.
          </Text>
          <Text>
            For over 4 years I had many opportunities to work with a lot of web
            technologies which let me gather a significant amount of experience.
            Here are a few I&quot;ve been working with recently:
          </Text>
          <BadgeGroup>
            {technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </BadgeGroup>
        </AboutText>
        <ImgWrapper>
          <Image src="/me.png" alt="me" width="250" height="250" />
        </ImgWrapper>
      </AboutBody>
    </AboutStyled>
  );
}

export default About;
