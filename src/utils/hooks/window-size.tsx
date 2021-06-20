import React from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function onWindowSizeChanged() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", onWindowSizeChanged);

    return () => {
      window.removeEventListener("resize", onWindowSizeChanged);
    };
  }, []);

  return windowSize;
}
