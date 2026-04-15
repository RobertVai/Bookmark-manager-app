import React from "react";
import styles from "./ProfileDropdown.module.css";
import profileAvatar from "../../assets/images/image-avatar.webp";
import themeIcon from "../../assets/images/icon-theme.svg";
import lightTheme from "../../assets/images/icon-light-theme.svg";
import darkTheme from "../../assets/images/icon-dark-theme.svg";

type ProfileDropdownProps = {
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
};

const ProfileDropdown = ({ theme, setTheme }: ProfileDropdownProps) => {
  return (
    <div className={styles.profileDropdown}>
      <div className={styles.dropdownHeader}>
        <img src={profileAvatar} alt="Profile Avatar" />
        <div>
          <h4>Emily Carter</h4>
          <p>emily@gmail.com</p>
        </div>
      </div>

      <div className={styles.themeContainer}>
        <div className={styles.theme}>
          <img className={styles.themeIcon} src={themeIcon} alt="Theme Icon" />
          <p>Theme</p>
        </div>

        <div className={styles.changeTheme}>
          <img
            className={`${styles.lightTheme} ${theme === "light" ? styles.activeTheme : ""}`}
            src={lightTheme}
            alt="Light Theme"
            onClick={() => setTheme("light")}
          />
          <img
            className={`${styles.darkTheme} ${theme === "dark" ? styles.activeTheme : ""}`}
            src={darkTheme}
            alt="Dark Theme"
            onClick={() => setTheme("dark")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
