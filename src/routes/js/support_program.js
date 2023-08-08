import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import pro_list from "../../components/js/program_public";
import { useState } from "react";
import post from "../css/program.module.css";
import { useNavigate } from "react-router-dom";
import Program_total from "../../components/js/Program/program_total";
import Program_pub from "../../components/js/Program/program_pub";
import Program_private from "../../components/js/Program/program_private";
import Program_house from "../../components/js/Program/house";
import Program_cash from "../../components/js/Program/cash";
import Program_job from "../../components/js/Program/job";
import Program_fur_education from "../../components/js/Program/fur_education";
import Program_etc from "../../components/js/Program/etc";

// 지원 프로그램 페이지
function Program() {
  // program에 모든 프로그램들 리스트 가져오기
  const [program, setProgram] = useState(pro_list);

  const navigate = useNavigate();

  // 해당 항목의 프로그램들을 가져오기 위해서 number 변수를 설정해준다.
  const [number, setNumber] = useState("0");
  const total_button = () => {
    setNumber("0");
  };
  const public_button = () => {
    setNumber("1");
  };
  const private_button = () => {
    setNumber("2");
  };
  const number3 = () => {
    setNumber("3");
  };
  const number4 = () => {
    setNumber("4");
  };
  const number5 = () => {
    setNumber("5");
  };
  const number6 = () => {
    setNumber("6");
  };
  const number7 = () => {
    setNumber("7");
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "980px",
        // marginLeft: "230px",
        // marginRight: "230px",
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
        <div className={menu.post}>
          <Link to="/posting" style={{ textDecoration: "none" }}>
            <Button>게시판</Button>
          </Link>
        </div>
        <div>
          <Link to="/program" style={{ textDecoration: "none" }}>
            <Button style={{ color: "#66c109" }}>프로그램</Button>
          </Link>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>멘토멘티</Button>
          </Link>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>문의</Button>
          </Link>
        </div>
      </div>

      {/* 프로그램의 주관사 선택 부분 */}
      <div className={post.first_button}>
        <span>주관사</span>
        <Button onClick={total_button} data-checked={number === "0"}>
          전체
        </Button>
        <Button onClick={public_button} data-checked={number === "1"}>
          공공
        </Button>
        <Button onClick={private_button} data-checked={number === "2"}>
          민간
        </Button>
      </div>
      {/* 프로그램의 카테고리 선택 부분 */}
      <div className={post.second_button}>
        <span>카테고리</span>
        <Button onClick={number3} data-checked={number === "3"}>
          주거
        </Button>
        <Button onClick={number4} data-checked={number === "4"}>
          취업
        </Button>
        <Button onClick={number5} data-checked={number === "5"}>
          금융
        </Button>
        <Button onClick={number6} data-checked={number === "6"}>
          진학
        </Button>
        <Button onClick={number7} data-checked={number === "7"}>
          기타
        </Button>
      </div>

      {/* 해당하는 프로그램들 나오도록 하기 */}
      <div style={{ width: "980px" }}>
        {number === "0" ? (
          <Program_total />
        ) : number === "1" ? (
          <Program_pub />
        ) : number === "2" ? (
          <Program_private />
        ) : number === "3" ? (
          <Program_house />
        ) : number === "4" ? (
          <Program_job />
        ) : number === "5" ? (
          <Program_cash />
        ) : number === "6" ? (
          <Program_fur_education />
        ) : (
          <Program_etc />
        )}
      </div>
    </div>
  );
}

export default Program;
