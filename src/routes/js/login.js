import React, { useEffect, useState } from "react";
import login from "../css/login.module.css";
import man_logo from "../../components/img/user.png";
import kakagoLogo from "../img/kakaoLogo.png";
import googleLogo from "../img/googleLogo.png";
import naverLogo from "../img/naverLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // 구글 로그인 연결
  const GoogleLogin = () => {
    window.location.href =
      "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect";
  };

  // 이메일과 비밀번호로 로그인
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onLogin = () => {
    axios
      .post(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/login",
        user
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("로그인을 다시 진행해주세요.");
      });
  };

  const onSignUp = () => {
    navigate("/signup");
  };

  return (
    <div style={{ width: "100%" }}>
      {/* 로그인 박스 부분 */}
      <div className={login.loginBox}>
        <div className={login.logo}>
          <Link to={"/"}>
            <img className={login.man} src={man_logo} />
            <p className={login.txt}>홀로서기</p>
          </Link>
        </div>
        <div className={login.loginInput}>
          <input
            type="text"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className={login.button}>
          <Button onClick={onLogin}>로그인</Button>

          <span
            style={{
              fontSize: "15px",
              width: "210px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              lineHeight: "24px",
            }}
          >
            계정이 없으신가요?
            <Button onClick={onSignUp}>회원가입</Button>
          </span>
        </div>
        <div className={login.lineBox}>
          <hr className={login.line} />
          <hr className={login.line2} />
        </div>
      </div>

      {/* SNS 로그인 부분 */}
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
  );
}

export default Login;
