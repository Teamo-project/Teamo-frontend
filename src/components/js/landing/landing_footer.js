import footer from "../../css/landing/landing_footer.module.css";

function Footer() {
  return (
    <div className={footer.footer_total}>
      <div className={footer.footer_left}>
        <h2>
          <i className="fa-regular fa-calendar-check"></i>LaslesVPN
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      <div className={footer.footer_right}>
        <div className={footer.footer_right_child}>
          <h2>Product</h2>
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
        <div className={footer.footer_right_child}>
          <h2>Engage</h2>
          <p>LaslesVPN</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About us</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
        <div className={footer.footer_right_child}>
          <h2>Earn money</h2>
          <p>Become partner</p>
          <p>Affilite</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
