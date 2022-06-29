import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  word-break: break-word;
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.gray};
`;

export const Highlight = styled.span`
  color: ${(p) => p.theme.colors.primary};
`;
