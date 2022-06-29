import { useState } from "react";

function useMenu() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow((prev) => !prev);
  }

  return { show, toggle };
}

export default useMenu;
