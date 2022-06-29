import styled from "styled-components";
import { Button } from "components/shared/Button.style";
import Menu from "./Menu";

export const NavbarStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.grayLight};
`;

export const MenuDesktop = styled(Menu)`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const MenuMobile = styled(Menu)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const MenuBtn = styled(Button)`
  padding: 0.5rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
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
