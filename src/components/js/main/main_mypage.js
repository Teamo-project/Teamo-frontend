import mypage from "../../css/main/main_mypage.module.css";

function Mypage() {
  return (
    <div>
      <div className={mypage.mypage_box}>
        <div className={mypage.user_img}>
          <i class="fa-solid fa-circle-user"></i>
        </div>
        <div className={mypage.user}>
          <span>박준형</span>
          <p>jh981109@naver.com</p>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
