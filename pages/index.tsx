import type { NextPage } from "next";
import { Container } from "components/shared/Container.style";
import Navbar from "components/Navbar";
import Home from "components/Home";
import About from "components/About";

const HomePage: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Home />
      <About />
    </Container>
  );
};

export default HomePage;
