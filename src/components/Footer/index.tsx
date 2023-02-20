import "./style.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left-section">
            <img src="assets/Image.png" alt="" />
            <div className="footer-mid-section">
              <div>Dealerz.</div>
              <div>Privacy Policy Terms and Condition</div>
              <div>@2020 TanahAir Studio. All rights reserved.</div>
            </div>
          </div>
          <div className="footer-right-section">
            <div className="rounded-social">Yt</div>
            <div className="rounded-social">Fb</div>
            <div className="rounded-social">Tw</div>
            <div className="rounded-social">Ig</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
