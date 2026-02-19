import Link from "next/link";
import "../styles/globals.css";
import headerStyle from "../styles/header.module.css";
import FacebookIcon from "@/app/components/icons/facebook_icon";
import InstagramIcon from "@/app/components/icons/instgram_icon";
import YoutubeIcon from "@/app/components/icons/youtube_icon";
export default function HeaderComponent() {
  return (
    <>
      <header className={headerStyle.header}>
        <ul className={headerStyle["header-container"]}>
          <li className={headerStyle["header-container-head"]}>Follow: </li>
          <li className={headerStyle["header-container-items"]}>
            <Link href={"/test_page"}>
              <FacebookIcon />
            </Link>
            <Link href="google.com">
              <InstagramIcon />
            </Link>
            <Link href={"/test_page"}>
              <YoutubeIcon />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
