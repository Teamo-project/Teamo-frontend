import { useNavigate } from "react-router-dom";
import signup from "../css/signup.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = user;

  const MoveToBack = () => {
    navigate("/login");
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "90px",
        }}
      >
        <div className={signup.total}>
          <div>회원가입</div>
          <Button onClick={MoveToBack}>취소</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
