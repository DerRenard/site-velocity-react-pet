import styles from "./Button.module.css";

export default function Button({
  children,
  onclick = () => {
    return;
  },
  classname
}) {
  return (
    <button onClick={() => onclick()} className={`${styles.Button} ${classname}`}>
      {children}
    </button>
  );
}
