import type { NextPage } from "next";
import { Container } from "components/shared/Container.style";
import Navbar from "components/Navbar";
import Home from "components/Home";

const HomePage: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
};

export default HomePage;
