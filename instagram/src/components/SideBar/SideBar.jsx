import style from "./SideBar.module.css";

import Logo from "../../assets/logo.png";
import Compress from "../../assets/compress.png";
import Home from "../../assets/home.png";
import Menu from "../../assets/menu.png";
import More from "../../assets/more.png";
import Send from "../../assets/send.png";
import Video from "../../assets/video.png";
import Search from "../../assets/search.png";
import Plus from "../../assets/plus.png";
import Profile from "../../assets/profile.png";
import Heart from "../../assets/heart.svg";

const SideBar = () => {
  return (
    <div className={style.SideBar}>
      <header>
        <img src={Logo} className={style.logo} alt="" />
      </header>

      <main>
        <ul className={style.ul}>
          <li>
            <img src={Home} className={style.icon} alt="" />
            <span>홈</span>
          </li>

          <li>
            <img src={Video} className={style.icon} alt="" />
            <span>릴스</span>
          </li>

          <li>
            <img src={Send} className={style.icon} alt="" />
            <span>메시지</span>
          </li>

          <li>
            <img src={Search} className={style.icon} alt="" />
            <span>검색</span>
          </li>

          <li>
            <img src={Compress} className={style.icon} alt="" />
            <span>탐색탭</span>
          </li>

          <li>
            <img src={Heart} className={style.icon} alt="" />
            <span>알림</span>
          </li>

          <li>
            <img src={Plus} className={style.icon} alt="" />
            <span>만들기</span>
          </li>

          <li>
            <img src={Profile} className={style.profile} alt="" />
            <span>프로필</span>
          </li>
        </ul>
      </main>

      <footer>
        <ul className={style.ul}>
          <li>
            <img src={Menu} className={style.icon} alt="" />
            <span>더 보기</span>
          </li>

          <li>
            <img src={More} className={style.icon} alt="" />
            <span>Meta의 다른 앱</span>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default SideBar;
