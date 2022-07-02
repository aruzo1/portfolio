import styled from "styled-components";

export const AboutStyled = styled.section`
  margin-top: -4rem;
  padding: 6rem 0 2rem 0;
`;

export const AboutBody = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const AboutImgWrapper = styled.div`
  position: relative;
  height: fit-content;
  margin: 0 1rem 1rem 0;

  & > img {
    border-radius: ${(p) => p.theme.borderRadius};
    object-fit: cover;

    @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
      width: 100%;
      height: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 1rem;
    left: 1rem;
    width: 100%;
    height: 100%;
    border-radius: ${(p) => p.theme.borderRadius};
    background: ${(p) => p.theme.colors.primary};
  }
`;
