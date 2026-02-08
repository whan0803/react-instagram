import styles from './LeftComponent.module.css'

const LeftComponent = () => {
  return (
    <div className={styles.LeftComponent}>
        <button className={styles.loginBtn}>로그인</button>
        <button className={styles.signupBtn}>새 계정 만들기</button>
    </div>
  );
};

export default LeftComponent;
