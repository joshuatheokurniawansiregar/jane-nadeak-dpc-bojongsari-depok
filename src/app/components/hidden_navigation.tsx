"use client";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import hiddenNavigationStyle from "@/app/styles/hidden_navigation.module.css";
import CloseIcon from "./icons/close_icon";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

export default function HiddenNavigationComponent() {
  const hiddenLeftSideNavigationRef = useRef(null);

  const [isClosed, setIsClosed] = useState(true);
  function funcSetIsClosedValue() {
    setIsClosed(!isClosed);
  }
  useEffect(() => {
    if (isClosed) {
      hiddenLeftSideNavigationRef.current?.classList.remove(
        `${hiddenNavigationStyle["hidden-left-side-navigation"]}`,
      );
      hiddenLeftSideNavigationRef.current?.classList.toggle(
        `${hiddenNavigationStyle["hidden-left-side-navigation-0px"]}`,
      );
    } else {
      hiddenLeftSideNavigationRef.current?.classList.remove(
        `${hiddenNavigationStyle["hidden-left-side-navigation-0px"]}`,
      );
      hiddenLeftSideNavigationRef.current?.classList.toggle(
        `${hiddenNavigationStyle["hidden-left-side-navigation"]}`,
      );
    }
  }, [isClosed]);
  function close() {
    setIsClosed(true);
  }
  return (
    <>
      <nav
        className={`${hiddenNavigationStyle["hidden-top-navigation"]} ${hiddenNavigationStyle["display-none"]}`}
      >
        <Link
          href=""
          className={hiddenNavigationStyle["hidden-top-navigation-logo"]}
        >
          <Image
            src="/assets/logo-psi-baru.webp"
            width={290}
            loading="eager"
            height={80}
            alt="Logo PSI"
            className={`${hiddenNavigationStyle["hidden-top-navigation-logo-image"]}`}
          ></Image>
          <p style={{ margin: "0 0 0 8px" }}>Partai Super Tbk.</p>
        </Link>
        <div
          className={`${hiddenNavigationStyle["hidden-top-navigation-menus-menu-button"]}`}
          onClick={funcSetIsClosedValue}
        >
          &#8801;
        </div>
      </nav>
      <nav
        className={`${hiddenNavigationStyle["display-none"]}`}
        ref={hiddenLeftSideNavigationRef}
      >
        <CloseIcon onClickFunc={close}></CloseIcon>
        <ul
          className={`${hiddenNavigationStyle["hidden-left-side-navigation-menu-container"]}`}
        >
          <li>
            {" "}
            <Link href="#">Beranda</Link>
          </li>
          <li>
            <Link href="#">Tentang Kita</Link>
          </li>
          <li>
            {" "}
            <Link href="#">PSI Hadir</Link>
          </li>
          <li>
            <Link href="#">PSI Kerja</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
