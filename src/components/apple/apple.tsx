import React from "react";
import AppleSvg from "../../assets/img/apple.svg";
import useWindowSize from "../../utils/hooks/window-size";

export interface AppleProps {
  style: { top: string; left: string; zIndex?: number };
}

//Base Apple Component
export default function Apple({ style }: AppleProps) {
  const { width } = useWindowSize();
  return (
    <div style={style} className="apple">
      <AppleSvg width={width / 30} height={40} />
    </div>
  );
}
