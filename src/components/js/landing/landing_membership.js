import member from "../../css/landing/landing_membership.module.css";
import { Button } from "react-bootstrap";
import member_box from "../../img/landing_member_box.png";

function Membership() {
  return (
    <div className={member.membership}>
      <div>
        <h1>원하는 멤버십을 선택하세요</h1>
        <p className={member.text}>
          무제한으로 즐기세요.
          <br />
          취향에 맞게 선택하세요.
          <br />
          멤버십을 언제든지 변경 또는 해지 가능합니다.
        </p>
      </div>
      <div className={member.membership_div}>
        <div className={member.membership_div_child}>
          <img src={member_box} alt="member_box" />
          <p>Free</p>
          <div>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Unlimited bandwitch</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Encrypted connection</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Yes trafic logs</span>
              </li>
            </ul>
          </div>
          <p>Free</p>
          <Button className={member.button_blue} type="button">
            BUTTON
          </Button>
        </div>
        <div className={member.membership_div_child}>
          <img src={member_box} alt="member_box" />
          <p>Standard</p>
          <div>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Unlimited bandwitch</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Encrypted connection</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Yes trafic logs</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Works on all devices</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Connect anyware</span>
              </li>
            </ul>
          </div>
          <p>$ 9 / Month</p>
          <Button className={member.button_blue} type="button">
            BUTTON
          </Button>
        </div>
        <div className={member.membership_div_child}>
          <img src={member_box} alt="member_box" />
          <p>Premium</p>
          <div>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Unlimited bandwitch</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Encrypted connection</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Yes trafic logs</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Works on all devices</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Connect anyware</span>
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                <span>Get new features</span>
              </li>
            </ul>
          </div>
          <p>$ 12 / Month</p>
          <Button className={member.button_blue} type="button">
            BUTTON
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
