import React from "react";
import styles from "./Toast.module.css";

type ToastProps = {
  toastMessage: string;
  toastVisible: boolean;
  setToastVisible: (value: boolean) => void;
};

const Toast = ({ toastMessage, toastVisible, setToastVisible }: ToastProps) => {
  if (!toastVisible) return null;

  return (
    <div className={styles.toastWrapper}>
      <div className={styles.toast}>
        <span className={styles.toastIcon}>✓</span>
        <p>{toastMessage}</p>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => setToastVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
