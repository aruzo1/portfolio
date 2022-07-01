import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  word-break: break-word;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    font-size: 3rem;
  }
`;

export const SectionTitle = styled.h2`
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 900;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    width: 100%;
    margin-left: 1rem;
    background: ${(p) => p.theme.colors.grayLight};
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.gray};
  white-space: pre-wrap;
`;

export const Highlight = styled.span`
  color: ${(p) => p.theme.colors.primary};
`;
