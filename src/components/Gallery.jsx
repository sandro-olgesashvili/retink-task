import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-item">
        <img src={img1} alt="gallery" />
        <h4>Logos</h4>
        <p className="gallery-text">
          Have a unique & creative logo designed to express and represent your
          brand identity.
        </p>
      </div>
      <div className="gallery-item">
        <img src={img2} alt="gallery" />
        <h4>Blog Writing</h4>
        <p className="gallery-text">
          Write SEO enriched blog posts as long or short articles on any topic
          of your choice .
        </p>
      </div>
      <div className="gallery-item">
        <img src={img3} alt="gallery" />
        <h4>Animated Videos</h4>
        <p className="gallery-text">
          Bring animated characters to life to keep your viewers engaged and
          entertained.
        </p>
      </div>
      <div className="gallery-item">
        <img src={img4} alt="gallery" />
        <h4>Product Demo</h4>
        <p className="gallery-text">
          Introduce your product to potential customers in a clear and creative
          video.
        </p>
      </div>
      <div className="gallery-item">
        <img src={img5} alt="gallery" />
        <h4>Copywriting</h4>
        <p className="gallery-text">
          Have creative and compelling copies written to boost your product,
          brand, service or company.
        </p>
      </div>
      <div className="gallery-item">
        <img src={img6} alt="gallery" />
        <h4>Social Media Ads</h4>
        <p className="gallery-text">
          Boost sales and awareness with tailor made ads from experts.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
