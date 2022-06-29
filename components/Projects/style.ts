import styled from "styled-components";

export const ProjectsStyled = styled.section`
  padding: 2rem 0;
`;

export const Project = styled.li`
  position: relative;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 75%;
  margin: 0 1rem 1rem 0;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    width: calc(100% - 1rem);
  }

  & > img {
    width: 100%;
    border-radius: ${(p) => p.theme.borderRadius};
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

export const ProjectContent = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 65%;
  padding: 1rem;
  border-radius: ${(p) => p.theme.borderRadius};
  background: #fff;
  box-shadow: 2px 2px 0.5rem 0 #0000003f;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    position: unset;
    transform: none;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ProjectTitle = styled.h3`
  color: ${(p) => p.theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
`;
