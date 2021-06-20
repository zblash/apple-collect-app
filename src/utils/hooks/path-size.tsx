import React from "react";
import { UIHelper, PositionProps } from "../helpers/ui-helper";
import useWindowSize from "./window-size";

interface PathSizeProps {
  pathSelectors: string[];
}

export default function usePathSize({ pathSelectors }: PathSizeProps) {
  const [pathSize, setPathSize] = React.useState<PositionProps>();
  const { width } = useWindowSize();

  React.useEffect(() => {
    setPathSize(UIHelper.combinePathPositions(...pathSelectors));
  }, []);

  React.useEffect(() => {
    setPathSize(UIHelper.combinePathPositions(...pathSelectors));
  }, [width]);

  return pathSize;
}
