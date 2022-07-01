import Fade from "components/animations/Fade";
import { Highlight, Title } from "components/shared/Typography.style";
import { LinkStyled } from "components/shared/Link.style";
import Socials from "components/shared/Socials";
import { HomeStyled, HomeText } from "./style";

function Home() {
  return (
    <Fade>
      <HomeStyled id="home">
        <Title>
          Hi, I&rsquo;m <Highlight>Aruzo</Highlight> Frontend Web Developer.
        </Title>
        <HomeText>
          I love to create responisve, solid, and scalable internet{" "}
          <LinkStyled href="#projects" primary>
            websites
          </LinkStyled>
          , client satisfaction is my prioritet. Interested in working together?
          Let&rsquo;s have a{" "}
          <LinkStyled href="#contact" primary>
            talk.
          </LinkStyled>
        </HomeText>
        <Socials />
      </HomeStyled>
    </Fade>
  );
}

export default Home;
