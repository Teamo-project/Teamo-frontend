import React from "react";
import login from "../css/login.module.css";
import man_logo from "../../components/img/man.png";
import kakagoLogo from "../img/kakaoLogo.png";
import googleLogo from "../img/googleLogo.png";
import naverLogo from "../img/naverLogo.png";
import { Link } from "react-router-dom";

function Login() {
  const GoogleLogin = () => {
    window.location.href =
      "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect";
  };

  return (
    <div className={login.root}>
      <div className={login.loginBox}>
        <div className={login.logo}>
          <Link to={"/"}>
            <img className={login.man} src={man_logo} />
            <p className={login.txt}>홀로서기</p>
          </Link>

        </div>
        <div className={login.lineBox}>
          <hr className={login.line} />
          <hr className={login.line2} />
        </div>

        <div className={login.btnBox}>
          <button type="button" className={`${login.Button} ${login.kakao}`}>
            <div className={login.buttonText}>
              <img className={login.btnLogo} src={kakagoLogo}></img>
              <div className={login.buttonText2}>카카오로 로그인하기</div>
            </div>
          </button>
          <button type="button" className={`${login.Button} ${login.naver}`}>
            <div className={login.buttonText}>
              <img className={login.btnLogo} src={naverLogo}></img>

              <div>네이버로 로그인하기</div>
            </div>
          </button>
          <button
            onClick={GoogleLogin}
            type="button"
            className={`${login.Button} ${login.google}`}
          >
            <div className={login.buttonText}>
              <img className={login.btnLogo} src={googleLogo}></img>

              <div>구글로 로그인하기</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
