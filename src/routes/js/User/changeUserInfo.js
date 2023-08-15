import Navigation from "../../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import menu from "../../../components/css/navigationMenu.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import changeInfo from "../../css/changeUserInfo.module.css";
import userImg from "../../../components/img/user_img.png";

// 첫 웹사이트 메인페이지
function ChangeInfo() {
  const [ispasswordType, setIspasswordType] = useState(false);
  const [ispasswordSame, setIspasswordSame] = useState(false);
  const [isphone, setIsphone] = useState(false);
  const [isage, setIsage] = useState(false);

  const [passwordtext, setPasswordtext] = useState("*비밀번호를 입력해주세요.");
  const [passwordSameText, setPasswordSameText] =
    useState("*비밀번호가 다릅니다.");
  const [phonetext, setPhonetext] = useState("");
  const [agetext, setAgetext] = useState("");

  const onSubmitInfo = () => {
    if (user.name === "") {
      alert("이름을 입력해주세요.");
    } else if (!ispasswordType) {
      alert("비밀번호를 형식에 맞게 다시 입력해주세요.");
    } else if (!ispasswordSame) {
      alert("비밀번호가 맞지 않습니다. 비밀번호 확인을 다시 입력해주세요.");
    } else if (!isphone) {
      alert("전화번호를 올바른 형식으로 입력해주세요.");
    } else if (!isage) {
      alert("나이를 정확히 입력해주세요.");
    } else {
      pushInfo();
    }
  };

  const pushInfo = async () => {
    try {
      await axios
        .put(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/update/${user.id}`
        )
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  const token = useSelector((state) => state.persistedReducer.user.userToken);
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
    email: "",
    phone: "",
    age: "",
    region: "",
    img: "",
  });

  const { name, password, phone, age, region, img } = user;

  const [passwordConfirm, setPasswordConfirm] = useState("");

  const getUserInfo = async () => {
    try {
      const resp = await axios.get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/info`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
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
    setPasswordConfirm(passwordSameCurrent);

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
    if (phoneCurrent === "") {
      setIsphone(false);
      setPhonetext("*전화번호를 입력해주세요.");
    } else if (regex.test(e.target.value)) {
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
    if (ageCurrent === "") {
      setIsage(false);
      setAgetext("*나이를 입력해주세요.");
    } else if (regex.test(e.target.value)) {
      setIsage(true);
      setAgetext("");
    } else {
      setIsage(false);
      setAgetext("*3자리 이하숫자로만 입력해주세요.");
    }
  };

  const deleteUser = async () => {
    const deleteAlert = alert("회원탈퇴를 하시겠습니까?");
    if (deleteAlert) {
      try {
        await axios
          .delete(
            `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/withdraw/?userId=${user.id}`
          )
          .then((res) => {
            console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#fafafa" }}>
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
          {/* 메뉴 부분 */}
          <div className={menu.menu}>
            <div>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button>홈</Button>
              </Link>
            </div>
            <div>
              <Link to="/posting" style={{ textDecoration: "none" }}>
                <Button>게시판</Button>
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
              marginTop: "266px",
              width: "1060px",
              height: "947px",
              backgroundColor: "white",
              marginBottom: "417px",
            }}
          >
            <div className={changeInfo.changeTop}>개인정보변경</div>
            <div
              style={{
                display: "flex",

                marginTop: "6px",
                marginLeft: "40px",
              }}
            >
              <div className={changeInfo.changeLabel}>
                {/* 변경 불가 */}
                <div>이름 *</div>

                <div>성별 *</div>
                <div>비밀번호 *</div>
                <div
                  style={{
                    borderBottom: "2px solid #D9D9D9",
                    width: "100%",
                    textAlign: "center",
                    paddingBottom: "6px",
                  }}
                >
                  비밀번호 확인 *
                </div>

                {/* 변경 불가 */}
                <div>개인 이메일 *</div>
                <div>전화번호 *</div>
                <div
                  style={{
                    borderBottom: "2px solid #D9D9D9",
                    width: "100%",
                    paddingBottom: "6px",
                    textAlign: "center",
                  }}
                >
                  나이 *
                </div>
                <div
                  style={{
                    borderBottom: "2px solid #D9D9D9",
                    width: "100%",
                    textAlign: "center",
                    height: "71px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  주소 *
                </div>

                {/* 변경 불가 */}
                <div
                  style={{
                    borderBottom: "2px solid #D9D9D9",
                    width: "100%",
                    textAlign: "center",
                    height: "259px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  사진
                </div>
                <div
                  style={{
                    width: "100%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "28px",
                  }}
                >
                  회원 탈퇴
                </div>
              </div>

              {user.id ? (
                <div
                  style={{
                    width: "730px",
                    height: "752px",
                    marginTop: "-6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "40px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="이름을 입력해주세요."
                      name="name"
                      value={name}
                      onChange={onChange}
                      style={{
                        width: "216px",
                        height: "22px",
                        border: "2px solid #d9d9d9",
                        paddingLeft: "10px",
                      }}
                    />
                    <div
                      style={{
                        color: "red",
                        marginLeft: "380px",
                        fontSize: "13px",
                      }}
                    >
                      {name === "" ? "이름을 입력해주세요" : ""}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "25px",
                      width: "700px",
                      height: "40px",
                      borderBottom: "2px solid #d9d9d9",
                      color: "#5f69be",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "normal",
                    }}
                  >
                    {user.gender}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "40px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요."
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      style={{
                        width: "238px",
                        height: "22px",
                        border: "2px solid #d9d9d9",
                        paddingLeft: "10px",
                      }}
                    />
                    <div
                      style={{
                        marginLeft: "10px",
                        width: "230px",
                        fontSize: "13px",
                      }}
                    >
                      {" "}
                      (8~16자의 영문 대,소문자와 숫자의 조합으로만 이용
                      가능합니다.){" "}
                    </div>
                    <div
                      style={{
                        color: "red",
                        marginLeft: "85px",
                        width: "180px",
                        fontSize: "13px",
                      }}
                    >
                      {passwordtext}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "41px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <input
                      type="password"
                      placeholder="비밀번호를 다시 입력해주세요."
                      name="passwordConfirm"
                      value={passwordConfirm}
                      onChange={onChangePasswordSame}
                      style={{
                        width: "240px",
                        height: "22px",
                        border: "2px solid #d9d9d9",
                        paddingLeft: "10px",
                      }}
                    />

                    <div
                      style={{
                        color: "red",
                        marginLeft: "306px",
                        width: "180px",
                        fontSize: "13px",
                      }}
                    >
                      {passwordSameText}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "25px",
                      width: "700px",
                      height: "41px",
                      borderBottom: "2px solid #d9d9d9",
                      color: "#5f69be",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "normal",
                    }}
                  >
                    {user.email}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "41.5px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="전화번호를 입력해주세요."
                      name="phone"
                      value={phone}
                      onChange={changePhone}
                      style={{
                        width: "218px",
                        height: "22px",
                        border: "2px solid #d9d9d9",
                        paddingLeft: "10px",
                      }}
                    />
                    <div
                      style={{
                        marginLeft: "10px",
                        width: "280px",
                        fontSize: "13px",
                      }}
                    >
                      "-"를 제외한 숫자만으로 입력해주세요.
                    </div>
                    <div
                      style={{
                        color: "red",
                        marginLeft: "15px",
                        width: "140px",
                        fontSize: "13px",
                      }}
                    >
                      {phonetext}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "40.5px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="나이를 입력해주세요."
                      name="age"
                      value={age}
                      onChange={changeAge}
                      style={{
                        width: "255px",
                        height: "22px",
                        border: "2px solid #d9d9d9",
                        paddingLeft: "10px",
                      }}
                    />

                    <div
                      style={{
                        color: "red",
                        marginLeft: "305px",
                        width: "190px",
                        fontSize: "13px",
                      }}
                    >
                      {agetext}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "81.5px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <select
                      name="region"
                      onChange={onChange}
                      style={{
                        width: "234px",
                        height: "42px",
                        flexShrink: "0",
                        border: "1px solid #ccc",
                        paddingLeft: "6px",
                      }}
                    >
                      <option value="서울" selected={user.region === "서울"}>
                        서울
                      </option>
                      <option value="인천" selected={user.region === "인천"}>
                        인천
                      </option>
                      <option value="경기" selected={user.region === "경기"}>
                        경기
                      </option>
                      <option
                        value="충청북도"
                        selected={user.region === "충청북도"}
                      >
                        충청북도
                      </option>
                      <option
                        value="충청남도"
                        selected={user.region === "충청남도"}
                      >
                        충청남도
                      </option>
                      <option
                        value="경상북도"
                        selected={user.region === "경상북도"}
                      >
                        경상북도
                      </option>
                      <option
                        value="경상남도"
                        selected={user.region === "경상남도"}
                      >
                        경상남도
                      </option>
                      <option
                        value="전라북도"
                        selected={user.region === "전라북도"}
                      >
                        전라북도
                      </option>
                      <option
                        value="전라남도"
                        selected={user.region === "전라남도"}
                      >
                        전라남도
                      </option>
                      <option
                        value="강원도"
                        selected={user.region === "강원도"}
                      >
                        강원도
                      </option>
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "270.5px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      style={{
                        width: "176px",
                        height: "165px",
                        borderRadius: "16px",
                        backgroundColor: "#f1f1f1",
                        marginLeft: "37px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "60px", borderRadius: "50%" }}
                        src={user.img === null ? userImg : user.img}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      width: "700px",
                      height: "102px",
                      borderBottom: "2px solid #d9d9d9",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <Button
                      onClick={deleteUser}
                      style={{
                        marginLeft: "40px",
                        width: "78px",
                        height: "30px",
                        backgroundColor: "#d9d9d9",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      탈퇴하기
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div style={{ width: "180px", margin: "40px auto" }}>
              <Button
                onClick={onSubmitInfo}
                style={{
                  width: "80px",
                  height: "36px",
                  border: "3px solid #d9d9d9",
                }}
              >
                확인
              </Button>
              <Link
                to="/inquire"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  style={{
                    width: "80px",
                    height: "36px",
                    border: "3px solid #d9d9d9",
                    marginLeft: "20px",
                  }}
                >
                  취소
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeInfo;