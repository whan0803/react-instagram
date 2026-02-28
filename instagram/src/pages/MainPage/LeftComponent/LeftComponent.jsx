import styles from './LeftComponent.module.css'
import { useContext } from 'react';


const LeftComponent = ({setLeftState}) => {



  return (
    <div className={styles.LeftComponent}>
      <button className={styles.loginBtn} onClick={() => setLeftState("login")}>
        로그인
      </button>
      <button
        className={styles.signupBtn}
        onClick={() => setLeftState("signup")}
      >
        새 계정 만들기
      </button>
    </div>
  );
};

export default LeftComponent;
