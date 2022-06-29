import styled from "styled-components";

export const Badge = styled.li`
  padding: 0.1rem 1rem;
  border: 1px solid ${(p) => p.theme.colors.primary};
  border-radius: 999px;
  font-size: 0.9rem;
  color: ${(p) => p.theme.colors.primary};
  background: ${(p) => p.theme.colors.primary}26;
`;

export const BadgeGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
