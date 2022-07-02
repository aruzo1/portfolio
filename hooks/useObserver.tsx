import { useEffect, useRef, useState } from "react";

function useObserver() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries[0].isIntersecting && setInView(true);
    });

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export default useObserver;
