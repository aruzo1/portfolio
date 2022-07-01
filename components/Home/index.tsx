import Fade from "components/animations/Fade";
import { Highlight, Text, Title } from "components/shared/Typography.style";
import Socials from "components/shared/Socials";
import { HomeStyled } from "./style";

function Home() {
  return (
    <Fade>
      <HomeStyled id="home">
        <Title>
          Hi, I&rsquo;m <Highlight>Aruzo</Highlight> Frontend Web Developer.
        </Title>
        <Text>
          For over a decade, I have studied and inscribed the sacred runes and
          performed the arcane rituals that breathe life into the realm of the
          internet. For over a decade, I have studied and inscribed the sacred
          runes and performer.
        </Text>
        <Socials />
      </HomeStyled>
    </Fade>
  );
}

export default Home;
