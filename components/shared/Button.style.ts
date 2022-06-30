import styled, { css, DefaultTheme } from "styled-components";

function variants(theme: DefaultTheme, variant: string) {
  return {
    primary: css`
      color: #fff;
      background: ${theme.colors.primary};

      &:hover {
        background: ${theme.colors.primaryDark};
      }
    `,
    text: css`
      color: ${theme.colors.primary};

      &:hover {
        background: ${theme.colors.grayLight};
      }
    `,
  }[variant];
}

export const Button = styled.button<{ variant: "primary" | "text" }>`
  padding: 0.5rem 1rem;
  border-radius: ${(p) => p.theme.borderRadius};
  font-weight: 600;
  transition: ${(p) => p.theme.transition};

  ${(p) => variants(p.theme, p.variant)}
`;

export const ButtonGroup = styled.div`
  display: flex;
  column-gap: 1rem;
`;
