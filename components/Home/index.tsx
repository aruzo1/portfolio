import Link from "next/link";
import Fade from "components/animations/Fade";
import { Button, ButtonGroup } from "components/shared/Button.style";
import { Highlight, Text, Title } from "components/shared/Typography.style";
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
        <ButtonGroup>
          <Link href="#projects">
            <Button variant="primary">My Projects</Button>
          </Link>
          <Link href="#contact">
            <Button variant="text">Contact Me</Button>
          </Link>
        </ButtonGroup>
      </HomeStyled>
    </Fade>
  );
}

export default Home;
