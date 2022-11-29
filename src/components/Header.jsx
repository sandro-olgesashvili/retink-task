import logo from "../assets/Logo.png";
import dog from "../assets/dog.png";
const Header = () => {
  return (
    <section className="header">
      <div className="header-main">
        <img src={logo} alt="log" className="header-logo" />
        <div className="header-ai">
          <h2 className="header-ai-first">Get Advanced AI + Expert Created</h2>
          <h2 className="header-ai-second">Logos</h2>
        </div>
        <p className="header-text">
          Boost your sales 10x faster with content customized by our unique
          partnership of human creativity and AI optimization
        </p>
        <h3 className="header-sm-text">Sign Up For The BETA!</h3>
        <div className="header-inputs">
          <input
            type="text"
            placeholder="Business Name"
            className="header-input"
          />
          <span className="header-span">would like a beta invite sent to </span>
          <input
            type="text"
            placeholder="@email address"
            className="header-input"
          />
          <span className="header-span">when it’s ready!</span>
        </div>
        <div className="header-btns">
          <button className="header-btn-first">Notify me</button>
          <button className="header-btn-second">
            Sign up as a freelance partner
          </button>
        </div>
      </div>
      <div>
        <img src={dog} alt="dog" className="dog" />
      </div>
    </section>
  );
};

export default Header;
