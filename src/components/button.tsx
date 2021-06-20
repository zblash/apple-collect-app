import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreState } from "../redux/reducers/app-reducer";
import { AppActions } from "../redux/actions/appActions";
export default function Button() {
  const dispatch = useDispatch();
  const isShaking = useSelector((state: AppStoreState) => state.isTreeShaking);
  return (
    <button
      onClick={() => dispatch(AppActions.shakeTree())}
      disabled={isShaking}
      className="basket-button"
    >
      Shake Tree
    </button>
  );
}
