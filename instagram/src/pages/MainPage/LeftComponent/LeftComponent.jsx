import styles from './LeftComponent.module.css'
import { useNavigate } from 'react-router-dom';


const LeftComponent = ({setLeftState}) => {

  const navigate = useNavigate();
  
  const goSignup = () => {
    navigate('/signup')
  }

  return (
    <div className={styles.LeftComponent}>
      <button className={styles.loginBtn} onClick={() => setLeftState("login")}>
        로그인
      </button>
      <button className={styles.signupBtn} onClick={goSignup}>
        새 계정 만들기
      </button>
    </div>
  );
};

export default LeftComponent;
