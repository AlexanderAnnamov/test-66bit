import { useLocalStorage } from "usehooks-ts";

import { ParamsTheme } from "../../redux/types";

import styles from "./theme.module.css";

const Theme = () => {
  const [theme, setTheme] = useLocalStorage<ParamsTheme>("theme", "light");

  return (
    <div className={styles.theme}>
      <h1 className={styles.title}>{theme} theme</h1>
      <button className={styles.dark} onClick={() => setTheme("dark")}>
        Dark theme {theme === "dark" && "🟡"}
      </button>
      <button className={styles.light} onClick={() => setTheme("light")}>
        Light theme {theme === "light" && "🟢"}
      </button>
      <button className={styles.blue} onClick={() => setTheme("blue")}>
        Blue theme {theme === "blue" && "🔵"}
      </button>
    </div>
  );
};

export default Theme;
