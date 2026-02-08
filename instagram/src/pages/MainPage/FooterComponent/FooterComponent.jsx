import styles from './FooterComponent.module.css'

const FooterComponent = () => {
  return (
    <div className={styles.FooterComponent}>
        <ul className={styles.ul}>
            <li><a href="#">Meta</a></li>
            <li><a href="#">소개</a></li>
            <li><a href="#">블로그</a></li>
            <li><a href="#">채용 정보</a></li>
            <li><a href="#">도움말</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">약관</a></li>
            <li><a href="#">위치</a></li>
            <li><a href="#">Instagram Lite</a></li>
            <li><a href="#">Meta Ai</a></li>
            <li><a href="#">Threads</a></li>
            <li><a href="#">연락처 업로드 & 비사용자</a></li>
            <li><a href="#">Meta Verified</a></li>
        </ul>
    </div>
  );
};

export default FooterComponent;
