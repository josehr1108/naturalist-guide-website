import { useEffect, useState } from "react";
const MAX_MOBILE_WIDTH = 1024;

const useScreenCheck = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
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
