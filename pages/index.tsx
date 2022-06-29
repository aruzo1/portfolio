import type { NextPage } from "next";
import { Container } from "components/shared/Container.style";
import Navbar from "components/Navbar";

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Home;
