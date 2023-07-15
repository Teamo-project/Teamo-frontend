import { useGoogleLogin } from "@react-oauth/google";
import styles from "../css/GoogleButton.module.css";

const GoogleButton = () => {
  const onClick = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
    flow: "auth code",
  });

  return (
    <button className={styles.Google} onClick={onClick}>
      <i class="fa-brands fa-google"></i>
      <span> Google 계정으로 로그인</span>
    </button>
  );
};
export default GoogleButton;
