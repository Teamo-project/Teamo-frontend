import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import signup from "../css/signup.module.css";
import menu from "../../components/css/navigationMenu.module.css";
import { useEffect, useState } from "react";
import { getBoardDetailApi } from "../../apis/boardApi";
import axios from "axios";
import home from "../css/home.module.css";
// 게시물 상세 페이지

function BoardDetail() {
  const navigate = useNavigate();

  const [isEmail, setIsEmail] = useState(false);
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const [ispasswordType, setIspasswordType] = useState(false);
  const [ispasswordSame, setIspasswordSame] = useState(false);
  const [isphone, setIsphone] = useState(false);
  const [isage, setIsage] = useState(false);
  const [isgender, setIsgender] = useState(false);
  const [isrole, setIsrole] = useState(false);
  const [ischecked1, setIschecked1] = useState(false);
  const [ischecked2, setIschecked2] = useState(false);

  const [emailtext, setEmailtext] = useState("*이메일을 입력해주세요.");
  const [codetext, setCodetext] = useState("");
  const [passwordtext, setPasswordtext] = useState("*비밀번호를 입력해주세요.");
  const [passwordSameText, setPasswordSameText] = useState("");
  const [phonetext, setPhonetext] = useState("*전화번호를 입력해주세요.");
  const [agetext, setAgetext] = useState("*나이를 입력해주세요.");
  const [gendertext, setGendertext] = useState("");
  const [roletext, setRoletext] = useState("");
  const [check1Text, setCheck1Text] = useState("");
  const [check2Text, setCheck2Text] = useState("");

  const onSubmit = () => {
    if (user.name === "") {
      alert("이름을 입력해주세요");
    } else if (!isEmail) {
      alert("이메일을 형식에 맞게 다시 입력해주세요.");
    } else if (!isConfirmCode) {
      alert("이메일 인증에 실패하였습니다. 다시 진행해주세요.");
    } else if (!ispasswordType) {
      alert("비밀번호를 형식에 맞게 다시 입력해주세요.");
    } else if (!ispasswordSame) {
      alert("비밀번호가 맞지 않습니다. 비밀번호 확인을 다시 입력해주세요.");
    } else if (!isphone) {
      alert("전화번호를 형식에 맞게 다시 입력해주세요.");
    } else if (!isage) {
      alert("나이를 형식에 맞게 입력해주세요.");
    } else if (!isgender) {
      alert("성별을 선택하지 않았습니다.");
    } else if (!isrole) {
      alert("멘토, 멘티 중 원하는 역할을 선택해주세요.");
    } else if (!ischecked1) {
      alert("약관에 동의해주세요.");
    } else if (!ischecked2) {
      alert("필수약관에 동의해주세요.");
    } else {
      finalSubmit();
      alert("회원가입이 되었습니다. 로그인을 다시 진행해주세요.");
      navigate("/login");
    }
  };

  const finalSubmit = async () => {
    try {
      await axios
        .post(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/join`,
          user
        )
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    code: "",
    password: "",
    passwordConfirm: "",
    role: "",
    phone: "",
    region: "서울",
    gender: "",
    age: "",
  });

  const {
    name,
    email,
    code,
    password,
    passwordConfirm,
    role,
    phone,
    region,
    gender,
    age,
  } = user;

  const onChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCurrent = e.target.value;
    setUser({
      ...user,
      email: emailCurrent,
    });

    if (!emailRegex.test(emailCurrent)) {
      setEmailtext("*이메일 형식이 틀렸어요! 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailtext("");
      setIsEmail(true);
    }
  };

  const sendCode = async () => {
    try {
      await axios
        .get(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/emails/verification-requests?email=${email}`
        )
        .then((res) => {
          if (res.status === 500) {
            alert("이미 회원가입된 이메일입니다.");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSendCode = () => {
    if (isEmail) {
      sendCode();
    } else {
      alert("이메일 형식이 올바르지 않습니다.");
    }
  };

  const confirmCode = async () => {
    try {
      await axios
        .get(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/emails/verifications?email=${email}&code=${code}`
        )
        .then((res) => {
          if (res.data.authResult) {
            setIsConfirmCode(true);
            setCodetext("*인증 성공");
          } else {
            setIsConfirmCode(false);
            setCodetext("*인증 실패");
          }
          console.log(res.data.authResult);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangePassword = (e) => {
    const passwordCurrent = e.target.value;
    setUser({
      ...user,
      password: passwordCurrent,
    });
    var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    if (passwordCurrent.length < 8 || passwordCurrent.length > 16) {
      setIspasswordType(false);
      setPasswordtext("*비밀번호 형식이 올바르지 않습니다.");
    } else if (regExp.test(passwordCurrent)) {
      setIspasswordType(true);
      setPasswordtext("*올바른 형식입니다.");
    } else {
      setIspasswordType(false);
      setPasswordtext("*비밀번호 형식이 올바르지 않습니다");
    }

    if (password === passwordConfirm) {
      setIspasswordSame(true);
      setPasswordSameText("*비밀번호가 같습니다.");
    } else {
      setIspasswordSame(false);
      setPasswordSameText("*비밀번호가 다릅니다.");
    }
  };

  const onChangePasswordSame = (e) => {
    const passwordSameCurrent = e.target.value;
    setUser({
      ...user,
      passwordConfirm: passwordSameCurrent,
    });

    if (password === passwordSameCurrent) {
      setIspasswordSame(true);
      setPasswordSameText("*비밀번호가 같습니다.");
    } else {
      setIspasswordSame(false);
      setPasswordSameText("*비밀번호가 다릅니다.");
    }
  };

  const changePhone = (e) => {
    const phoneCurrent = e.target.value;
    setUser({
      ...user,
      phone: phoneCurrent,
    });

    const regex = /^[0-9\b]{0,11}$/;
    if (regex.test(e.target.value)) {
      setIsphone(true);
      setPhonetext("");
    } else {
      setIsphone(false);
      setPhonetext("*올바른 형식으로 입력해주세요.");
    }
  };

  const changeAge = (e) => {
    const ageCurrent = e.target.value;
    setUser({
      ...user,
      age: ageCurrent,
    });
    const regex = /^[0-9\b]{0,3}$/;
    if (regex.test(e.target.value)) {
      setIsage(true);
      setAgetext("");
    } else {
      setIsage(false);
      setAgetext("*3자리 이하숫자로만 입력해주세요.");
    }
  };

  const changeGender = (e) => {
    setUser({
      ...user,
      gender: e.target.value,
    });
    setIsgender(true);
    setGendertext(e.target.value);
  };

  const changeRole = (e) => {
    setUser({
      ...user,
      role: e.target.value,
    });
    setIsrole(true);
    setRoletext(e.target.value);
  };

  const onCheck1 = () => {
    setIschecked1(true);
    setCheck1Text("check");
  };

  const onCheck2 = () => {
    setIschecked2(true);
    setCheck2Text("check");
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "1180px",
          margin: "0 auto",
        }}
      >
        <Navigation />

        <div className={menu.menu}>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>홈</Button>
            </Link>
          </div>
          <div className={menu.post}>
            <Link to="/posting" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#66c109" }}>게시판</Button>
            </Link>
          </div>
          <div>
            <Link to="/program" style={{ textDecoration: "none" }}>
              <Button>프로그램</Button>
            </Link>
          </div>
          <div>
            <Link to="/postlist" style={{ textDecoration: "none" }}>
              <Button>멘토멘티</Button>
            </Link>
          </div>
          <div>
            <Link to="/inquire" style={{ textDecoration: "none" }}>
              <Button>문의</Button>
            </Link>
          </div>
        </div>
        <div
          style={{
            width: "980px",
            height: "1086px",
            margin: "268px auto 58px",
            display: "flex",
            flexShrink: "0",
            borderRadius: "16px",
            backgroundColor: "white",
            boxShadow: "0px 4px 4px 0px rgba(102, 193, 9, 0.20)",
            paddingLeft: "152px",
            paddingTop: "35px",
            display: "flex",
            flexDirection: "column",
          }}
          className={signup.totalSignUp}
        >
          <div className={signup.signup}>회원가입</div>
          <div style={{ marginTop: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "20px",
                color: "#333",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "20px",
              }}
            >
              이름
            </div>
            <input
              type="text"
              placeholder="이름 입력"
              name="name"
              value={name}
              onChange={onChange}
            />
            {name === "" ? (
              <div
                style={{
                  width: "160px",
                  height: "20px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "210px",
                }}
              >
                *이름을 입력해주세요
              </div>
            ) : (
              <div
                style={{ width: "160px", height: "20px", color: "red" }}
              ></div>
            )}
          </div>
          <div>
            <div
              style={{
                width: "44px",
                height: "20px",
                color: "#333",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "20px",
              }}
            >
              이메일
            </div>
            <div>
              <input
                type="email"
                placeholder="이메일 입력"
                name="email"
                value={email}
                onChange={onChangeEmail}
              />
              <Button
                onClick={onClickSendCode}
                style={{
                  padding: "0px 10px",
                  marginLeft: "66px",
                  width: "118px",
                  height: "44px",
                  borderRadius: "8px",
                  backgroundColor: "#66C109",
                  color: "white",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  fontStyle: "normal",
                  cursor: "pointer",
                }}
              >
                인증 코드 전송
              </Button>
            </div>
            <div
              style={{
                width: "160px",
                height: "20px",
                color: "red",
                fontSize: "13px",
                marginLeft: "192px",
              }}
            >
              {emailtext}
            </div>
          </div>
          <div>
            <div
              style={{
                width: "56px",
                height: "20px",
                color: "#333",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "20px",
              }}
            >
              인증코드
            </div>
            <div>
              <input
                type="text"
                placeholder="인증 코드 입력"
                name="code"
                value={code}
                onChange={onChange}
              />
              <Button
                onClick={confirmCode}
                style={{
                  padding: "0px 10px",
                  marginLeft: "66px",
                  width: "118px",
                  height: "44px",
                  borderRadius: "8px",
                  backgroundColor: "#66C109",
                  color: "white",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  fontStyle: "normal",
                  cursor: "pointer",
                }}
              >
                인증 확인
              </Button>
            </div>
            <div
              style={{
                width: "160px",
                height: "20px",
                color: "red",
                fontSize: "13px",
                marginLeft: "272px",
              }}
            >
              {codetext}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <div
                style={{
                  width: "240px",
                  height: "20px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: "20px",
                }}
              >
                비밀번호(8~16자의 영문,숫자 포함)
              </div>
              <input
                type="text"
                placeholder="비밀번호 입력"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
              <div
                style={{
                  width: "140px",
                  height: "20px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "208px",
                }}
              >
                {passwordtext}
              </div>
            </div>
            <div style={{ marginLeft: "56px" }}>
              <div
                style={{
                  width: "106px",
                  height: "20px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: "20px",
                }}
              >
                비밀번호 확인
              </div>
              <input
                type="text"
                placeholder="비밀번호 입력"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={onChangePasswordSame}
              />
              <div
                style={{
                  width: "160px",
                  height: "20px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "212px",
                }}
              >
                {passwordSameText}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "200px",
                height: "20px",
                color: "#333",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "20px",
              }}
            >
              전화번호(-없이 숫자만 입력)
            </div>
            <input
              type="text"
              placeholder="전화번호 입력"
              name="phone"
              value={phone}
              onChange={changePhone}
            />
            <div
              style={{
                width: "160px",
                height: "20px",
                color: "red",
                fontSize: "13px",
                marginLeft: "180px",
              }}
            >
              {phonetext}
            </div>
          </div>
          <div>
            <div
              style={{
                width: "80px",
                height: "20px",
                color: "#333",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "20px",
              }}
            >
              주 거주 지역
            </div>
            <select
              name="region"
              onChange={onChange}
              style={{
                width: "320px",
                height: "44px",
                flexShrink: "0",
                borderRadius: "8px",
                border: "1px solid #ccc",
                paddingLeft: "16px",
              }}
            >
              <option value="서울">서울</option>
              <option value="인천">인천</option>
              <option value="경기">경기</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
              <option value="강원도">강원도</option>
            </select>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                width: "200px",
                height: "20px",
                color: "#333",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "20px",
              }}
            >
              나이
            </div>
            <input
              type="text"
              placeholder="나이 입력"
              name="age"
              value={age}
              onChange={changeAge}
            />
            <div
              style={{
                width: "160px",
                height: "20px",
                color: "red",
                fontSize: "13px",
                marginLeft: "200px",
              }}
            >
              {agetext}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <div
                style={{
                  width: "200px",
                  height: "20px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: "20px",
                  marginTop: "20px",
                }}
              >
                성별
              </div>
              <div style={{ marginTop: "6px" }}>
                <Button
                  className={signup.selectButton}
                  value="남"
                  onClick={changeGender}
                  data-checked={gendertext === "남"}
                >
                  남자
                </Button>
                <Button
                  style={{ marginLeft: "10px" }}
                  className={signup.selectButton}
                  value="여"
                  onClick={changeGender}
                  data-checked={gendertext === "여"}
                >
                  여자
                </Button>
              </div>
              <div
                style={{
                  width: "160px",
                  height: "20px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "12px",
                }}
              >
                {gendertext === "" ? "*성별을 선택해주세요" : ""}
              </div>
            </div>
            <div style={{ marginLeft: "208px" }}>
              <div
                style={{
                  width: "200px",
                  height: "20px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: "20px",
                  marginTop: "20px",
                }}
              >
                멘토/멘티
              </div>
              <div style={{ marginTop: "6px" }}>
                <Button
                  className={signup.selectButton}
                  value="mentor"
                  onClick={changeRole}
                  data-checked={roletext === "mentor"}
                >
                  멘토
                </Button>
                <Button
                  style={{ marginLeft: "10px" }}
                  className={signup.selectButton}
                  value="mentee"
                  onClick={changeRole}
                  data-checked={roletext === "mentee"}
                >
                  멘티
                </Button>
              </div>
              <div
                style={{
                  width: "180px",
                  height: "20px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "4px",
                }}
              >
                {roletext === "" ? "*본인의 역할을 선택해주세요" : ""}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={onCheck1}
                data-checked={check1Text === "check"}
                className={signup.check}
              >
                <i class="fa-regular fa-circle-check"></i>
              </Button>
              <div
                style={{
                  width: "149px",
                  height: "24px",
                  fontSize: "16px",
                  fontWeight: "16px",
                  marginLeft: "4px",
                }}
              >
                약관 전체 동의하기
              </div>
            </div>
            <div
              style={{
                width: "348px",
                height: "40px",
                color: "#555",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                marginTop: "8px",
              }}
            >
              실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택),
              이벤트-혜택 정보 수신(선택) 동의를 포함합니다.
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={onCheck2}
                data-checked={check2Text === "check"}
                className={signup.check}
              >
                <i class="fa-regular fa-circle-check"></i>
              </Button>
              <div
                style={{
                  width: "189px",
                  height: "24px",
                  fontSize: "16px",
                  fontWeight: "16px",
                  marginLeft: "4px",
                  display: "flex",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
              >
                <div style={{ color: "#66c109" }}>[필수]</div>
                <div style={{ marginLeft: "4px" }}>홀로서기 이용약관</div>
              </div>
            </div>
            <div
              style={{
                width: "330px",
                height: "96px",
                borderRadius: "8px",
                color: "#555",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                marginTop: "8px",
                overflowY: "scroll",
                paddingRight: "16px",
              }}
            >
              홀로서기 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
              본 약관은 다양한 홀로서기 서비스의 이용과 관련하여 서비스를
              제공하는 레코와 이를 이용하는 서비스 회원(이하 회원) 또는
              비회원과의 관계를 설명하며, 아울러 여러분의 레코 서비스 이용에
              도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            </div>
          </div>
        </div>
        <div style={{ margin: "46px auto 0px" }}>
          <Button
            style={{
              width: "320px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#66C109",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
            onClick={onSubmit}
          >
            {" "}
            회원가입하기
          </Button>
        </div>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <div
            style={{
              width: "170px",
              margin: "20px auto 90px",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              paddingBottom: "2px",
              borderBottom: "1px solid black",
              cursor: "pointer",
            }}
          >
            로그인 페이지로 돌아가기
          </div>
        </Link>
      </div>
      {/* 가장 아래 footer부분 */}
      <div className={home.footer}>
        <div className={home.footerLeft}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>홀로서기</h2>
          </Link>
          <p>청소년 자립 지원 공공 서비스</p>
          <div>연락처 : 010-4470-2175</div>
          <div>이메일 : chandelier7642@gmail.com</div>
          <div>주소 : 세종대학교 학생회관 B123</div>
        </div>
        <div className={home.footerRight}>
          <div className={home.footerAgency}>
            <h4>협업 정부 기관</h4>
            <div>여성가족부</div>
            <div>청소년자립지원단</div>
            <div>한국청소년상담복지개발원</div>
            <div>한국청소년정책연구원</div>
            <div>한국청소년활동진흥원</div>
          </div>
          <div className={home.footerSponsor}>
            <h4>후원사</h4>
            <div>삼성재단</div>
            <div>LG재단</div>
            <div>카카오</div>
          </div>
          <div className={home.footerSpon}>
            <h4>후원</h4>
            <div>후원 문의</div>
            <div>1644-1211</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;
