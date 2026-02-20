import Image from "next/image";
import Link from "next/link";
import HeaderComponent from "./components/header_component";
import TopNavigationComponent from "./components/top_navigation_component";
import HiddenNavigationComponent from "./components/hidden_navigation";
import homeStyle from "@/app/styles/home.module.css";
import TopWave from "./components/icons/top_wave";
import BottomWave from "./components/icons/bottom_wave";
import CalendarIcon from "./components/icons/calendar_icon";
export default function Home() {
  return (
    <html>
      <head></head>
      <body>
        <>
          <HeaderComponent></HeaderComponent>
          <TopNavigationComponent></TopNavigationComponent>
          <HiddenNavigationComponent></HiddenNavigationComponent>
          <div
            className={`${homeStyle["hero-section"]} ${homeStyle["margin-top"]}`}
          >
            <div className={`${homeStyle["hero-section-logo"]}`}>
              <Image
                src="/assets/logo-psi-baru.webp"
                loading="eager"
                width={290}
                height={80}
                alt="Logo PSI"
                className={`${homeStyle["hero-section-logo-image"]}`}
              ></Image>
              <h1 style={{ margin: "0 0 0 8px" }}>Partai Super Tbk.</h1>
            </div>
            <h1 className={`${homeStyle["hero-section-title"]}`}>
              Jane Nadeak, Ketua DPC PSI Bojongsari Depok
            </h1>
          </div>

          <div
            className={`${homeStyle["daftar-anggota-relawan-flex-row"]} ${homeStyle["daftar-anggota-relawan-flex-column"]}`}
          >
            <Link href={"https://psi.id/menjadi-anggota/"}>Daftar Anggota</Link>
            <Link href={"https://psi.id/pendaftaran-relawan-tanggap-bencana/"}>
              Daftar Relawan
            </Link>
          </div>

          <TopWave />
          <main className={`${homeStyle["psi-hadir-container"]}`}>
            <p className={`${homeStyle["psi-hadir-container-psi-hadir"]}`}>
              #PSI Hadir
            </p>
            <h1
              className={`${homeStyle["psi-hadir-container-liputan-kegiatan-psi"]}`}
            >
              LIPUTAN KEGIATAN DPC BOJONGSARI DEPOK PSI
            </h1>
            <section className={`${homeStyle["psi-hadir-container-cards"]}`}>
              <div className={`${homeStyle["psi-hadir-container-card"]}`}>
                <a
                  className={`${homeStyle["psi-hadir-container-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-hadir-container-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["psi-hadir-container-card-title"]}`}
                >
                  <h2
                    className={`${homeStyle["psi-hadir-container-card-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <span
                  className={`${homeStyle["psi-hadir-container-card-date"]}`}
                >
                  11 February, 2026
                </span>
              </div>

              <div className={`${homeStyle["psi-hadir-container-card"]}`}>
                <a
                  className={`${homeStyle["psi-hadir-container-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-hadir-container-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["psi-hadir-container-card-title"]}`}
                >
                  <h2
                    className={`${homeStyle["psi-hadir-container-card-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <span
                  className={`${homeStyle["psi-hadir-container-card-date"]}`}
                >
                  11 February, 2026
                </span>
              </div>

              <div className={`${homeStyle["psi-hadir-container-card"]}`}>
                <a
                  className={`${homeStyle["psi-hadir-container-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-hadir-container-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["psi-hadir-container-card-title"]}`}
                >
                  <h2
                    className={`${homeStyle["psi-hadir-container-card-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <span
                  className={`${homeStyle["psi-hadir-container-card-date"]}`}
                >
                  11 February, 2026
                </span>
              </div>

              <div className={`${homeStyle["psi-hadir-container-card"]}`}>
                <a
                  className={`${homeStyle["psi-hadir-container-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-hadir-container-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["psi-hadir-container-card-title"]}`}
                >
                  <h2
                    className={`${homeStyle["psi-hadir-container-card-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <span
                  className={`${homeStyle["psi-hadir-container-card-date"]}`}
                >
                  11 February, 2026
                </span>
              </div>

              <div className={`${homeStyle["psi-hadir-container-card"]}`}>
                <a
                  className={`${homeStyle["psi-hadir-container-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-hadir-container-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["psi-hadir-container-card-title"]}`}
                >
                  <h2
                    className={`${homeStyle["psi-hadir-container-card-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <span
                  className={`${homeStyle["psi-hadir-container-card-date"]}`}
                >
                  11 February, 2026
                </span>
              </div>

              <div className={`${homeStyle["psi-hadir-container-card"]}`}>
                <a
                  className={`${homeStyle["psi-hadir-container-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-hadir-container-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["psi-hadir-container-card-title"]}`}
                >
                  <h2
                    className={`${homeStyle["psi-hadir-container-card-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <span
                  className={`${homeStyle["psi-hadir-container-card-date"]}`}
                >
                  11 February, 2026
                </span>
              </div>
            </section>
          </main>
          <BottomWave />

          <main className={`${homeStyle["psi-kerja-container"]}`}>
            <p className={`${homeStyle["psi-kerja-container-psi-kerja"]}`}>
              #PSI Kerja
            </p>
            <h1
              className={`${homeStyle["psi-kerja-container-pernyataan-sikap-psi"]}`}
            >
              PERNYATAAN SIKAP DPC BOJONGSARI DEPOK PSI
            </h1>
            <section className={`${homeStyle["psi-kerja-container-lists"]}`}>
              <div className={`${homeStyle["psi-kerja-container-lists-list"]}`}>
                <Link
                  href={""}
                  className={`${homeStyle["psi-kerja-container-lists-list-link"]}`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-kerja-container-lists-list-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </Link>
                <div
                  className={`${homeStyle["psi-kerja-container-lists-list-stack"]}`}
                >
                  <Link
                    href={""}
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-title"]}`}
                  >
                    PSI Bantu Warga Terdampak Tanah Bergerak di Kabupaten Tegal
                  </Link>
                  <div
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-line-divider"]}`}
                  >
                    {""}
                  </div>
                  <div
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-date"]}`}
                  >
                    <CalendarIcon color={"#000"}></CalendarIcon>
                    <span>10 February, 2026</span>
                  </div>
                </div>
              </div>

              <div className={`${homeStyle["psi-kerja-container-lists-list"]}`}>
                <Link
                  href={""}
                  className={`${homeStyle["psi-kerja-container-lists-list-link"]}`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-kerja-container-lists-list-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </Link>
                <div
                  className={`${homeStyle["psi-kerja-container-lists-list-stack"]}`}
                >
                  <Link
                    href={""}
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-title"]}`}
                  >
                    PSI Bantu Warga Terdampak Tanah Bergerak di Kabupaten Tegal
                  </Link>
                  <div
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-line-divider"]}`}
                  >
                    {""}
                  </div>
                  <div
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-date"]}`}
                  >
                    <CalendarIcon color={"#000"}></CalendarIcon>
                    <span>10 February, 2026</span>
                  </div>
                </div>
              </div>

              <div className={`${homeStyle["psi-kerja-container-lists-list"]}`}>
                <Link
                  href={""}
                  className={`${homeStyle["psi-kerja-container-lists-list-link"]}`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["psi-kerja-container-lists-list-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </Link>
                <div
                  className={`${homeStyle["psi-kerja-container-lists-list-stack"]}`}
                >
                  <Link
                    href={""}
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-title"]}`}
                  >
                    PSI Bantu Warga Terdampak Tanah Bergerak di Kabupaten Tegal
                  </Link>
                  <div
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-line-divider"]}`}
                  >
                    {""}
                  </div>
                  <div
                    className={`${homeStyle["psi-kerja-container-lists-list-stack-date"]}`}
                  >
                    <CalendarIcon color={"#000"}></CalendarIcon>
                    <span>10 February, 2026</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <TopWave />
          <main className={`${homeStyle["blog-container"]}`}>
            <p className={`${homeStyle["blog-container-blog"]}`}>#BLOG</p>
            <h1 className={`${homeStyle["blog-container-blog-dpc"]}`}>
              BLOG DPC BOJONGSARI DEPOK PSI
            </h1>
            <section className={`${homeStyle["blog-container-cards"]}`}>
              <div className={`${homeStyle["blog-container-cards-card"]}`}>
                <a
                  className={`${homeStyle["blog-container-cards-card-link"]}`}
                  href="#"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/assets/Raja-Juli-2.jpeg"}
                    alt="Image"
                    className={`${homeStyle["blog-container-cards-card-link-image"]}`}
                    fetchPriority="high"
                  ></Image>
                </a>
                <Link
                  href={""}
                  className={`${homeStyle["blog-container-cards-card-link-title"]}`}
                >
                  <h2
                    className={`${homeStyle["blog-container-cards-card-link-title-title"]}`}
                  >
                    PSI: Soal Cawapres 2029, Kita Serahkan kepada Pak Prabowo
                  </h2>
                </Link>
                <div
                  className={`${homeStyle["blog-container-cards-card-date"]}`}
                >
                  <CalendarIcon color={"rgb(105, 105, 105)"}></CalendarIcon>
                  <span>11 February, 2026</span>
                </div>
              </div>
            </section>
          </main>
          <BottomWave />
        </>
      </body>
    </html>
  );
}
