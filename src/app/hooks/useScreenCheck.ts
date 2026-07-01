import { useEffect, useState } from "react";

const MAX_MOBILE_WIDTH = 1024;

const useScreenCheck = () => {
  const [width, setWidth] = useState<number>(MAX_MOBILE_WIDTH);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width < MAX_MOBILE_WIDTH,
  };
};

export default useScreenCheck;
