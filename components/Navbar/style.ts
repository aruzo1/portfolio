import styled from "styled-components";
import { Container } from "components/shared/Container.style";
import { Button } from "components/shared/Button.style";
import Menu from "./Menu";

export const NavbarStyled = styled.nav`
  position: fixed;
  z-index: 10;
  inset: 0;
  bottom: unset;
  border-bottom: 1px solid ${(p) => p.theme.colors.grayLight};
  background: #fff;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const MenuDesktop = styled(Menu)`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuMobile = styled(Menu)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuBtn = styled(Button)`
  padding: 0.5rem;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: none;
  }

  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const MenuItem = styled.li`
  width: fit-content;
`;
