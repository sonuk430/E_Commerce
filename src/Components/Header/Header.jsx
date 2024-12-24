import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header_wrapper}>
        <h2>Shop</h2>
        <h3>Dark Mode</h3>
      </div>
    </>
  );
};

export default Header;
