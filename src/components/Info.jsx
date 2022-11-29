import brain from "../assets/brain.png";
import ppl from "../assets/ppl.png";
import group from "../assets/Group.png";
import vectro from "../assets/Vector.png";
import doc from "../assets/doc.png";

const Info = () => {
  return (
    <section className="info">
      <div className="info-item">
        <div className="info-header">
          <img src={brain} alt="brain" />
          <h3>MakeAI-assisted Content Choices</h3>
        </div>
        <p className="info-text">
          Access and Order from an extensive catalogue in any language and on
          your budget’s terms. If unsure, our AI guides you to the best.
        </p>
      </div>
      <div className="info-item">
        <div className="info-header">
          <img src={group} alt="brain" />
          <h3>Upload and Maintain your Brand Identity</h3>
        </div>
        <p className="info-text">
          Add your preferences and brand assets to ensure the contents is
          consistent with your brand identity. No brand asset? We can make for
          you!
        </p>
      </div>
      <div className="info-item">
        <div className="info-header">
          <img src={vectro} alt="brain" />
          <h3>Be informed as we create</h3>
        </div>
        <p className="info-text">
          Your details are translated and sent to the AI, FP, or both (per your
          choice) as you relax and receive continuous updates.
        </p>
      </div>
      <div className="info-item">
        <div className="info-header">
          <img src={ppl} alt="brain" />
          <h3>Receive and Review</h3>
        </div>
        <p className="info-text">
          The finished content is delivered and you can make corrections that we
          will effect to satisfy your requirements.
        </p>
      </div>
      <div className="info-item">
        <div className="info-header">
          <img src={doc} alt="brain" />
          <h3>Publish and Monitor your contents’ progress</h3>
        </div>
        <p className="info-text">
          The finished content is delivered and you can make corrections that we
          will effect to satisfy your requirements.
        </p>
      </div>
    </section>
  );
};

export default Info;
