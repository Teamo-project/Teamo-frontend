import Navigation from "../../components/js/navigation.js";
import Sign from "../../components/js/landing_sign.js";
import Team from "../../components/js/landing_team.js";
import Membership from "../../components/js/landing_membership.js";
import Teamo from "../../components/js/landing_teamo_score.js";
import Mypage from "../../components/js/landing_mypage.js";
import Footer from "../../components/js/landing_footer.js";

function Home() {
  return (
    <div>
      <Navigation />
      <Sign />
      <Team />
      <Membership />
      <Teamo />
      <Mypage />
      <Footer />
    </div>
  );
}

export default Home;
