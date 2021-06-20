import React from "react";
import usePathSize from "../../utils/hooks/path-size";
import useInterval from "../../utils/hooks/interval";
import { useDispatch } from "react-redux";
import { UIHelper, PositionProps } from "../../utils/helpers/ui-helper";
import Apple from "./apple";

interface DropableAppleProps {
  id: string;
  pagePos: PositionProps;
}

export default function DropableApple({ id, pagePos }: DropableAppleProps) {
  const firstRender = React.useRef(false);
  const [style, setStyle] = React.useState<{ top: string; left: string }>();
  const [display, setDisplay] = React.useState<boolean>(false);
  const [isPosChangeable, setPosChangeable] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const pathSize = usePathSize({
    pathSelectors: [".tree_svg__left-leaf", ".tree_svg__right-leaf"],
  });

  // Drop Apple with custom interval hook
  useInterval(
    () => {
      setStyle((prev) => {
        return {
          ...prev,
          top: `${parseFloat(prev.top.slice(0, -2)) + 1}px`,
        };
      });
    },
    10,
    !isPosChangeable,
  );

  // Calculate Apple's first position on tree
  React.useEffect(() => {
    let timer;
    if (!firstRender.current) {
      timer = setTimeout(() => {
        setStyle({
          left: `${UIHelper.getRandomInRange(
            pathSize.left + 40,
            pathSize.right - 40,
          )}px`,
          top: `${UIHelper.getRandomInRange(
            pathSize.top + 40,
            pathSize.bottom - 40,
          )}px`,
        });
        firstRender.current = true;
        // Apple ready to dropping
        setPosChangeable(true);
        setDisplay(true);
      }, UIHelper.getRandomInRange(100, 2000));
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [pathSize]);

  // After Apple drop to the bottom of page wait a second and send Apple to basket
  React.useEffect(() => {
    let timer;
    if (
      firstRender.current &&
      style &&
      parseFloat(style.top.slice(0, -2)) > pagePos.bottom - pagePos.top - 40
    ) {
      // Disable dropping
      setPosChangeable(false);

      // Apple will be disappear on screen and basket apple will appear at basket
      timer = setTimeout(() => {
        dispatch({
          type: "appleDropped",
          payload: id,
        });
      }, 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [style, firstRender]);

  return <>{display && <Apple style={style} />}</>;
}
