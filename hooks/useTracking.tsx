import { useEffect } from "react";
import { useRouter } from "next/router";

function useTracking() {
  const router = useRouter();

  const handleRouteChange = (url : string) => {
    window.gtag("config", process.env.NEXT_PUBLIC_TRACKING_ID, {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export default useTracking;
