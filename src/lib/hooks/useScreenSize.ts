import { useEffect, useState } from "react";

export function useScreenSize() {
  const mobileQuery = "(max-width: 767px)";
  const smallScreenQuery = "(max-width: 1024px)";

  const getMatches = () => ({
    isMobile: window.matchMedia(mobileQuery).matches,
    isSmallScreen: window.matchMedia(smallScreenQuery).matches,
  });

  const [screenSize, setScreenSize] = useState(getMatches);

  useEffect(() => {
    const mobileMedia = window.matchMedia(mobileQuery);
    const smallScreenMedia = window.matchMedia(smallScreenQuery);

    const handleChange = () => {
      setScreenSize(getMatches());
    };

    mobileMedia.addEventListener("change", handleChange);
    smallScreenMedia.addEventListener("change", handleChange);

    return () => {
      mobileMedia.removeEventListener("change", handleChange);
      smallScreenMedia.removeEventListener("change", handleChange);
    };
  }, []);

  return screenSize;
}