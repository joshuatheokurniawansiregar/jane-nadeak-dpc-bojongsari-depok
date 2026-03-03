import commonStyle from "@/app/styles/common.module.css";
import "../../styles/globals.css";
import LoginComponent from "@/app/components/admin/login_component";

export default function AdminLogin() {
  return (
    <html>
      <head></head>
      <body>
        <>
          <div
            className={`${commonStyle["w-100"]} ${commonStyle["h-100"]} ${commonStyle["bg-gray-300"]}  ${commonStyle["p-absolute"]} ${commonStyle["d-flex"]} ${commonStyle["d-flex-justify-center"]} ${commonStyle["d-flex-align-center"]}`}
          >
            <div
              className={`${commonStyle["w-80"]} ${commonStyle["h-80"]} ${commonStyle["bg-white"]} ${commonStyle["mx-1_5-rem"]} ${commonStyle["p-0_5-rem"]} ${commonStyle["border-rounded"]} ${commonStyle["d-flex"]} ${commonStyle["d-flex-column"]}`}
            >
              <h1
                className={`${commonStyle["mx-auto"]} ${commonStyle["mt-1_5-rem"]}`}
              >
                Login
              </h1>
              <LoginComponent></LoginComponent>
            </div>
          </div>
        </>
      </body>
    </html>
  );
}
