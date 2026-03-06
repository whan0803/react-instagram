import { useState } from "react"
import style from './LoginPage.module.css'

import { useNavigate } from "react-router-dom";
import axios from "axios";



const LoginPage = ({ setLeftState }) => {

    const navigate = useNavigate();

  const [login, setLogin] = useState({
    user_mail: "",
    user_password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setLogin({
      ...login,
      [name]: value
    })
  }

  const handleLogin = async () => {
    const data = login;
    console.log(data)

    try {
      const res = await axios.post("http://localhost:3000/login", data);
      alert("로그인이 완료되었습니다");
      
      navigate("/homepage");
    }catch(err) {
      console.log(err);
    }
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
          type="password"
          placeholder="비밀번호"
        />
        <button onClick={handleLogin} className={style.button}>
          로그인
        </button>
        <p className={style.p}>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginPage