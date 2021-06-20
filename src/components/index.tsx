import React from "react";
import { useSelector } from "react-redux";
import { AppStoreState } from "../reducers/app-reducer";
import Button from "./button";
import Tree from "./tree";
import Basket from "./basket";
import DropableApple from "./apple/dropable-apple";
import usePathSize from "../utils/hooks/path-size";
import BasketApple from "./apple/basket-item";

export default function Index() {
  const appleList = useSelector((state: AppStoreState) => state);
  const pagePos = usePathSize({
    pathSelectors: [".page-wrapper"],
  });
  return (
    <>
      {appleList.basketItemList.map((e) => (
        <BasketApple key={e} />
      ))}
      {appleList.droppingAppleList.map((e) => (
        <DropableApple pagePos={pagePos} id={e} key={e} />
      ))}
      <div className="tree-wrapper">
        <Tree />
      </div>

      <div className="basket-wrapper">
        <Basket />
        <Button />
      </div>
    </>
  );
}
