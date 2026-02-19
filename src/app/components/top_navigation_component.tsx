"use client";
import Image from "next/image";
import Link from "next/link";
import topNavigationStyle from "@/app/styles/top_navigation.module.css";
import "../styles/globals.css";
import { usePathname } from "next/navigation";

export default function TopNavigationComponent() {
  const pathName = usePathname();
  return (
    <nav
      className={`${topNavigationStyle["top-navigation"]} ${topNavigationStyle["display-none"]}`}
    >
      <Link href="" className={topNavigationStyle["top-navigation-logo"]}>
        <Image
          src="/assets/logo-psi-baru.webp"
          loading="eager"
          width={290}
          height={80}
          alt="Logo PSI"
          style={{ width: "290px", height: "80px" }}
        ></Image>
        <p style={{ margin: "0 0 0 8px" }}>Partai Super Tbk.</p>
      </Link>
      <ul className={topNavigationStyle["top-navigation-menus"]}>
        <li>
          <Link
            href="/"
            className={
              pathName === "/"
                ? `${topNavigationStyle["targeted-active-link"]}`
                : `${topNavigationStyle["untargeted-active-link"]}`
            }
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={
              pathName === "tentang-kita"
                ? `${topNavigationStyle["targeted-active-link"]}`
                : `${topNavigationStyle["untargeted-active-link"]}`
            }
          >
            Tentang Kita
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={
              pathName === "psi-hadir"
                ? `${topNavigationStyle["targeted-active-link"]}`
                : `${topNavigationStyle["untargeted-active-link"]}`
            }
          >
            PSI Hadir
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={
              pathName === "/psi-kerja"
                ? `${topNavigationStyle["targeted-active-link"]}`
                : `${topNavigationStyle["untargeted-active-link"]}`
            }
          >
            PSI Kerja
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={
              pathName === "/blog"
                ? `${topNavigationStyle["targeted-active-link"]}`
                : `${topNavigationStyle["untargeted-active-link"]}`
            }
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
