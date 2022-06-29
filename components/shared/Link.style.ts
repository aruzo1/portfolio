import Link from "next/link";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  transition: ${(p) => p.theme.transition};

  &:hover {
    color: ${(p) => p.theme.colors.primaryDark};
  }
`;
