import commonStyle from "@/app/styles/common.module.css";
export default function LoginComponent() {
  return (
    <form
      className={`${commonStyle["container-fluid"]} ${commonStyle["mx-auto"]} ${commonStyle["d-flex"]} ${commonStyle["d-flex-column"]}`}
    >
      <h3 className={`${commonStyle["mt-1_5-rem"]}`}>Email</h3>
      <input
        type="email"
        className={`${commonStyle["w-100"]} ${commonStyle["mb-1_5-rem"]} ${commonStyle["input-no-border"]} ${commonStyle["input-bg-gray"]} ${commonStyle["input-rounded"]} ${commonStyle["px-1_5-rem"]}`}
      ></input>
      <h3>Password</h3>
      <input
        type="password"
        className={`${commonStyle["w-100"]} ${commonStyle["mb-1_5-rem"]} ${commonStyle["input-no-border"]} ${commonStyle["input-bg-gray"]} ${commonStyle["input-rounded"]} ${commonStyle["px-1_5-rem"]}`}
      ></input>
      <button
        type="submit"
        className={`${commonStyle["d-flex-self-center"]} ${commonStyle["btn"]} ${commonStyle["btn-gray-300"]}`}
      >
        Login
      </button>
    </form>
  );
}
