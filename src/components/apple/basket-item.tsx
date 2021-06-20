import React from "react";
import usePathSize from "../../utils/hooks/path-size";
import Apple from "./apple";
import { UIHelper } from "../../utils/helpers/ui-helper";

// Basket Apple will appear at basket
export default function BasketApple() {
  const firstRender = React.useRef(false);
  const [style, setStyle] =
    React.useState<{ top: string; left: string; zIndex: number }>();
  const pathSize = usePathSize({
    pathSelectors: [".basket_svg__basket-bottom"],
  });

  // On first render set Apple position for appears at basket
  React.useEffect(() => {
    if (!firstRender.current && pathSize) {
      setStyle({
        left: `${
          pathSize.left +
          UIHelper.getRandomInRange(1, pathSize.right - pathSize.left - 40)
        }px`,
        top: `${pathSize.top - 40}px`,
        zIndex: 0,
      });
      firstRender.current = true;
    }
  }, [pathSize]);

  return <Apple style={style} />;
}
