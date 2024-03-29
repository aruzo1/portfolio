import Image from "next/future/image";
import Fade from "components/animations/Fade";
import {
  Highlight,
  SectionTitle,
  Text,
} from "components/shared/Typography.style";
import { Badge, BadgeGroup } from "components/shared/Badge.style";
import { AboutBody, AboutStyled, AboutText, AboutImgWrapper } from "./style";

const technologies = [
  "HTML",
  "JavaScript",
  "CSS",
  "TypeScript",
  "React",
  "React Redux",
  "Vue",
  "Next.js",
  "Nuxt.js",
  "MySQL",
  "GraphQL",
  "REST",
];

function About() {
  return (
    <Fade>
      <AboutStyled id="about">
        <SectionTitle>
          About <Highlight>Me</Highlight>
        </SectionTitle>
        <AboutBody>
          <AboutText>
            <Text>
              Hello, my name is David Ostrzyżek (aruzo) and I love creating
              websites. I&rsquo;m programming since I was 13.
            </Text>
            <Text>
              For over 6 years I had many opportunities to work with a lot of
              web technologies which let me gather a significant amount of
              experience. Here are a few I&rsquo;ve been working with recently:
            </Text>
            <BadgeGroup>
              {technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </BadgeGroup>
          </AboutText>
          <AboutImgWrapper>
            <Image
              src="/images/aruzo.png"
              alt="aruzo"
              title="aruzo"
              width="250"
              height="250"
              quality={100}
            />
          </AboutImgWrapper>
        </AboutBody>
      </AboutStyled>
    </Fade>
  );
}

export default About;
