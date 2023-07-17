import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();

  return (
    <GoogleLogin
      buttonText="Login"
      onSuccess={(res) => {
        const inFo = jwtDecode(res.credential);

        fetch("http://localhost:3000/login", {
          method: "POST",
          body: JSON.stringify({
            clientId:
              "617889757552-kkjsgl2e9rs1heefavl8macrgnsvh891.apps.googleusercontent.com",
          }),
        })
          .then((res) => {
            res.json();
            navigate("/Main");
          })
          .then(console.log(res));
      }}
      onError={() => {
        console.log("FAIL");
      }}
    />
  );
};
export default GoogleButton;
