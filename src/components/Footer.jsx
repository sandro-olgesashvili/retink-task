import logo from "../assets/Logo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import ln from "../assets/ln.png";
import pint from "../assets/pint.png";
import tw from "../assets/tw.png";
import yt from "../assets/you.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-first">
            <img src={logo} alt="log" className="footer-logo" />

            <div className="footer-first-location">
              <div className="footer-item">
                <h3>Product by Retink Media UG</h3>
                <h3>Bonn, Germany</h3>
              </div>
              <div className="footer-item">
                <h3>Get Early Acess</h3>
                <h3>Provide Feedback</h3>
              </div>
            </div>
          </div>
          <div className="footer-second">
            <h3>Connect with Us</h3>
            <div className="footer-icons">
              <a href="https://www.facebook.com/">
                <img src={fb} alt="f" />
              </a>
              <a href="https://twitter.com/">
                <img src={tw} alt="f" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={insta} alt="f" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={ln} alt="f" />
              </a>
              <a href="https://youtube.com/">
                <img src={yt} alt="f" />
              </a>
              <a href="https://www.pinterest.com/">
                <img src={pint} alt="f" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-black">
        <div className="footer-black-container">
          <h4>Copyright © 2021 Retink</h4>
          <h4>Terms of Service</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
