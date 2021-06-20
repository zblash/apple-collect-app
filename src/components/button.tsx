import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreState } from "../reducers/app-reducer";
export default function Button() {
  const dispatch = useDispatch();
  const isShaking = useSelector((state: AppStoreState) => state.isTreeShaking);
  return (
    <button
      onClick={() =>
        dispatch({
          type: "shakeTree",
        })
      }
      disabled={isShaking}
      className="basket-button"
    >
      Shake Tree
    </button>
  );
}
