import main from "../css/Main.module.css";
import Navigation from "../../components/js/main_navigation";
import My_page from "../../components/js/main/main_mypage";
import Schedule from "../../components/js/main/main_schedule";
import Project from "../../components/js/main/main_project";

function Main() {
  return (
    <div className={main.main_column}>
      <Navigation />
      <div>
        <My_page />
        <div className={main.mypage_bottom}>
          <Schedule />
          <div>
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
