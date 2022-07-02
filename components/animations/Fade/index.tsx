import { ReactNode } from "react";
import useObserver from "hooks/useObserver";
import { FadeStyled } from "./style";

function Fade({ children }: { children: ReactNode }) {
  const { ref, inView } = useObserver();

  return (
    <FadeStyled ref={ref} show={inView}>
      {children}
    </FadeStyled>
  );
}

export default Fade;
