import styles from "../RightComponent.module.css";

import MainLogo from "../../../../assets/nWfBjz-5_uf.png";

const RightComponentMain = () => {
  return (
    <div className={styles.main}>
      <img className={styles.MainImg} src={MainLogo} alt="" />
    </div>
  );
};

export default RightComponentMain;
