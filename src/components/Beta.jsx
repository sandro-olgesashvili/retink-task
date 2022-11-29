const Beta = () => {
  return (
    <section className="beta">
      <h2 className="beta-title">Sign Up For The BETA to see more</h2>
      <div className="beta-inputs">
        <input type="text" className="beta-input" placeholder="Business Name"/>
        <input type="text" className="beta-input" placeholder="Email" />
      </div>

      <button className="beta-btn">
        <span className="beta-span">N</span>otify me
      </button>

      <button className="beta-btn-tr">Sign up as a freelance partner</button>
    </section>
  );
};

export default Beta;
