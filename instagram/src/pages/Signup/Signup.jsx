import styles from "./Signup.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"; 

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    user_mail: "",
    user_password: "",
    user_birth: "",
    user_name: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  // 해당 월 마지막 날짜
  const lastDay = new Date(year, month, 0).getDate();
  const days = Array.from({ length: lastDay }, (_, i) => i + 1);

  const navigate = useNavigate();

  const goReturn = () => {
    navigate("/");
  };

  const handleSignup = async () => {

    let months = month;
    let days = day;

    if(months < 10) {
      months = "0" + month;
    }

    if(days < 10) {
      days = "0" + day;
    }

    const birth = `${year}-${months}-${days}`;

    const data = {
      ...signupForm,
      user_birth: birth,
    };

    try {
      const res = await axios.post("http://localhost:3000/signup", data);
      console.log(res.data);
      alert("회원가입이 정상적으로 완료되었습니다");
    }catch(err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.Signup}>
      <h2 className={styles.h2}>인스타그램에서 시작하기</h2>

      <div className={styles.inputBoxWrapper}>
        <label htmlFor="email">이메일 주소</label>
        <input
          type="email"
          id="email"
          name="user_mail"
          placeholder="이메일 주소를 입력해주세요"
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputBoxWrapper}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="user_password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
        />
      </div>

      {/* 생년월일 */}
      <div className={styles.inputBoxWrapper}>
        <label>생년월일</label>

        <div className={styles.selectWrapper}>
          {/* 년 */}
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}년
              </option>
            ))}
          </select>

          {/* 월 */}
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}월
              </option>
            ))}
          </select>

          {/* 일 */}
          <select value={day} onChange={(e) => setDay(Number(e.target.value))}>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}일
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.inputBoxWrapper}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder="이름을 입력해주세요"
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputBoxWrapper}>
        <label htmlFor="userId">아이디</label>
        <input
          type="text"
          id="userId"
          name="user_id"
          placeholder="아이디를 입력해주세요"
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button onClick={handleSignup} className={styles.button}>
          회원가입 하기
        </button>

        <button onClick={goReturn} className={styles.button}>
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default Signup;
