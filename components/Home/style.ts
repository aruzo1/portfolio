import { Text } from "components/shared/Typography.style";
import styled from "styled-components";

export const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  padding: 8rem 0 2rem 0;
`;

export const HomeText = styled(Text)`
  font-size: 1.25rem;
`;
