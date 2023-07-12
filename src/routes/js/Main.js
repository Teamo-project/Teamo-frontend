import main from "../css/Main.module.css";
import Navigation from "../../components/js/main_navigation";
import Main_page from "../../components/js/main/main_mypage";

function Main() {
  return (
    <div className={main.main_column}>
      <Navigation />
      <div>
        <Main_page />
        <Main_page />
      </div>
    </div>
  );
}

export default Main;
