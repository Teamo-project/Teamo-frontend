import { useEffect, useState } from "react";
import google from "../css/FirstGoogleSignUp.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

function FirstGoogle() {
  const userId = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userId: userId.userId,
    phone: "",
    gender: "남",
    region: "서울",
    age: "",
  });
  const { phone, gender, region, age } = user;
  const onChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onChangePhone = () => {
    setUser({
      ...user,
      phone: user.phone.replaceAll("-", ""),
    });
  };

  const submit = async () => {
    try {
      await axios
        .post(
          "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/auth/join/plus",
          user
        )
        .then((res) => {
          alert("회원가입이 되었습니다. 로그인을 다시 진행해주세요.");
          navigate("/login");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const sumbitGoogle = () => {
    if (user.age === "") {
      alert("나이를 입력해주세요.");
    } else if (user.phone === "") {
      alert("전화번호를 입력해주세요.");
    } else {
      onChangePhone();
      submit();
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#FAFAFA" }}>
      <div style={{ position: "absolute", top: "0", width: "100%" }}>
        <div className={google.googlebox}>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            추가정보 입력
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ marginTop: "50px" }}>
              <span style={{ width: "100px", display: "inline-block" }}>
                성별 :{" "}
              </span>
              <label htmlFor="남">남</label>
              <input
                id="남"
                type="radio"
                name="gender"
                value="남"
                onChange={onChange}
                defaultChecked
              ></input>
              <label htmlFor="여" style={{ marginLeft: "10px" }}>
                여
              </label>
              <input
                id="여"
                type="radio"
                name="gender"
                value="여"
                onChange={onChange}
              ></input>
            </div>
            <div>
              <span style={{ width: "100px", display: "inline-block" }}>
                지역 :{" "}
              </span>
              <select
                className={google.selectRegion}
                name="region"
                onChange={onChange}
              >
                <option value="서울">서울</option>
                <option value="경기">경기</option>
              </select>
            </div>
            <div style={{ marginTop: "40px" }}>
              <span style={{ width: "100px", display: "inline-block" }}>
                나이 :
              </span>
              <input
                type="text"
                placeholder="나이 입력(ex.25)"
                name="age"
                value={age}
                onChange={onChange}
                className={google.textInput}
              />
            </div>
            <div style={{ marginTop: "40px" }}>
              <span style={{ width: "100px", display: "inline-block" }}>
                전화번호 :{" "}
              </span>
              <input
                type="text"
                placeholder="010-0000-0000"
                name="phone"
                value={phone}
                onChange={onChange}
                className={google.textInput}
              />
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <Button
              onClick={sumbitGoogle}
              style={{
                width: "90px",
                height: "35px",
                backgroundColor: "#66c109",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstGoogle;
