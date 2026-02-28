import { useState } from "react"
import style from './LoginPage.module.css'

const LoginPage = ({ setLeftState }) => {
  return (
    <div className={style.LoginPage}>
      <div>
        <p className={style.goReturn} onClick={() => setLeftState(false)}>돌아가기</p>
      </div>

      <div className={style.inputBox}>
        <input className={style.input} type="text" placeholder="이메일 주소" />
        <input className={style.input} type="text" placeholder="비밀번호" />
        <button className={style.button}>로그인</button>
        <p className={style.p}>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginPage