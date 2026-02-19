"use client";
import hiddenTopNavigationStyle from "@/app/styles/hidden_navigation.module.css";
import { MouseEventHandler } from "react";
export default function CloseIcon({
  onClickFunc,
}: {
  onClickFunc: MouseEventHandler<SVGElement>;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 24 24"
      className={`${hiddenTopNavigationStyle["hidden-left-side-navigation-close-button"]}`}
      onClick={onClickFunc}
    >
      <path
        fill="white"
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
      ></path>
    </svg>
  );
}
