import styles from "./Pingui.module.css";

// Lili's penguin mascot, drawn entirely with CSS shapes.
// Ported from the original Create React App version (src/Components/Pingui.jsx).
export default function Pingui({ message }) {
  const s = (...names) => names.map((n) => styles[n]).join(" ");

  return (
    <div className={s("fondo")}>
      <div className={s("sun")} aria-hidden="true" />

      <div className={s("penguin")} role="img" aria-label="Penguin mascot waving">
        {message && (
          <div className={s("thinking")}>
            <p className={s("bubble")}>{message}</p>
          </div>
        )}

        <div className={s("head")} aria-hidden="true">
          <div className={s("face", "left")} />
          <div className={s("face", "right")} />
          <div className={s("chin")} />
          <div className={s("eye", "left")}>
            <div className={s("eyeLid")} />
          </div>
          <div className={s("eye", "right")}>
            <div className={s("eyeLid")} />
          </div>
          <div className={s("blush", "left")} />
          <div className={s("blush", "right")} />
          <div className={s("beak", "top")} />
          <div className={s("beak", "bottom")} />
        </div>

        <div className={s("body")} aria-hidden="true">
          <div className={s("arm", "left")} />
          <div className={s("arm", "right")} />
          <div className={s("foot", "left")} />
          <div className={s("foot", "right")} />
        </div>
      </div>

      <div className={s("ground")} aria-hidden="true" />
    </div>
  );
}
