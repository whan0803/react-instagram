import { useState } from "react"
import style from './LoginPage.module.css'

import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLeftState }) => {

  const [login, setLogin] = useState({
    user_mail: "",
    user_password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setLogin({
      ...setLogin,
      [name]: value
    })
  }

  const navigate = useNavigate();

  const goHomePage = () => {
    navigate('/homepage')
  }

  return (
    <div className={style.LoginPage}>
      <div>
        <p className={style.goReturn} onClick={() => setLeftState(false)}>
          돌아가기
        </p>
      </div>

      <div className={style.inputBox}>
        <input
          name="user_mail"
          onChange={handleChange}
          className={style.input}
          type="text"
          placeholder="이메일 주소"
        />
        <input
          name="user_password"
          onChange={handleChange}
          className={style.input}
          type="text"
          placeholder="비밀번호"
        />
        <button onClick={goHomePage} className={style.button}>
          로그인
        </button>
        <p className={style.p}>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginPage