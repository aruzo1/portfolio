import { Button } from "components/shared/Button.style";
import { Highlight, Text, Title } from "components/shared/Typography.style";
import { ButtonGroup, HomeStyled } from "./style";

function Home() {
  return (
    <HomeStyled id="home">
      <Title>
        Hi, I'm <Highlight>Aruzo</Highlight> Frontend Web Developer.
      </Title>
      <Text>
        For over a decade, I have studied and inscribed the sacred runes and
        performed the arcane rituals that breathe life into the realm of the
        internet. For over a decade, I have studied and inscribed the sacred
        runes and performer.
      </Text>
      <ButtonGroup>
        <Button variant="primary">My Projects</Button>
        <Button variant="text">Contact Me</Button>
      </ButtonGroup>
    </HomeStyled>
  );
}

export default Home;
