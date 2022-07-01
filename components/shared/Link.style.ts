import Link from "next/link";
import styled from "styled-components";

export const LinkStyled = styled(Link)<{ primary?: boolean }>`
  color: ${(p) => p.primary && p.theme.colors.primary};
  transition: ${(p) => p.theme.transition};

  &:hover {
    color: ${(p) => p.theme.colors.primaryDark};
  }
`;

export const IconLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  transition: ${(p) => p.theme.transition};

  &:hover {
    color: ${(p) => p.theme.colors.primaryDark};
  }
`;

export const IconLinkGroup = styled.div`
  display: flex;
  column-gap: 1rem;
`;
