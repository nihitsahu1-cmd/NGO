import Arrow from "./Arrow.jsx";

export default function About({ site }) {
  return (
    <section className="about section" id="about">
      <div className="about-image-wrap">
        <img
          className="about-image"
          src={site.aboutImage}
          alt="Children gathered for a Swadesh Seva Sansthan education program"
          loading="lazy"
        />
        <div className="round-stamp"><span aria-hidden="true">✦</span><small>Serving<br />since 2018</small></div>
        <div className="image-caption"><span aria-hidden="true">♡</span><strong>Education and care<br />for every child.</strong></div>
      </div>
      <div className="about-copy">
        <span className="section-kicker">Who we are</span>
        <h2>
          {site.aboutTitle.firstLine}<br />
          {site.aboutTitle.secondLine} <em>{site.aboutTitle.emphasis}</em>
        </h2>
        <p>{site.aboutText}</p>
        <p className="registration-note"><strong>Society Registration:</strong> {site.registration}</p>
        <ul className="check-list">
          <li>Education and career opportunities for children and youth</li>
          <li>Accessible healthcare, nutrition, and wellness awareness</li>
          <li>Skills and livelihood support for inclusive communities</li>
        </ul>
        <div className="founder-note">
          <strong>Founder: {site.founder}</strong>
          <span>{site.founderNote}</span>
        </div>
        <a className="button button-green" href="#contact">Learn about us <Arrow /></a>
      </div>
    </section>
  );
}
