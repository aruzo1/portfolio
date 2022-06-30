import styled from "styled-components";
import { Title } from "components/shared/Typography.style";

export const ContactStyled = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  text-align: center;
  margin-top: -4rem;
  padding: 6rem 0 4rem 0;
`;

export const ContactTitle = styled(Title)`
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 1px;
    width: 50%;
    background: ${(p) => p.theme.colors.grayLight};
  }

  &::before {
    right: 1rem;
    margin-left: -50%;
  }

  &::after {
    left: 1rem;
    margin-right: -50%;
  }
`;
