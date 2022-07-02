import styled from "styled-components";

export const FadeStyled = styled.div<{ show?: boolean }>`
  opacity: ${(p) => (p.show ? 1 : 0)};
  transform: ${(p) => (p.show ? "none" : "translateX(-10rem);")};
  transition: 0.5s;
`;
