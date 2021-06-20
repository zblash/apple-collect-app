import React from "react";
import TreeSvg from "../assets/img/tree.svg";
import { useSelector, useDispatch } from "react-redux";
import { AppStoreState } from "../reducers/app-reducer";
import useWindowSize from "../utils/hooks/window-size";
import { UIHelper } from "../utils/helpers/ui-helper";

export default function Tree() {
  const isShaking = useSelector((state: AppStoreState) => state.isTreeShaking);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  // After isShaking triggered 3 seconds apples will be drop
  React.useEffect(() => {
    let timer;
    if (isShaking) {
      // Event sent
      timer = setTimeout(() => {
        dispatch({
          type: "dropApple",
          payload: UIHelper.getRandomInRange(2, 7),
        });
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isShaking]);

  return (
    <TreeSvg
      width={width / 2}
      className={`tree ${isShaking ? "shaking-tree" : ""}`}
    />
  );
}
