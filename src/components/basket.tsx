import React from "react";
import BasketSvg from "../assets/img/basket.svg";
import { useSelector } from "react-redux";
import { AppStoreState } from "../reducers/app-reducer";
import useWindowSize from "../utils/hooks/window-size";

export default function Basket() {
  const basketCount = useSelector(
    (state: AppStoreState) => state.basketItemList.length,
  );
  const { width } = useWindowSize();

  return (
    <div className="basket-icon-wrapper">
      <p className="basket-counter">{basketCount}</p>
      <BasketSvg width={width / 10} height={150} />
    </div>
  );
}
