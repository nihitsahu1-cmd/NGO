import Arrow from "./Arrow.jsx";

export default function About({ site, copy }) {
  return (
    <section className="about section" id="about">
      <div className="about-image-wrap">
        <img
          className="about-image"
          src={site.aboutImage}
          alt={copy.imageAlt}
          loading="lazy"
        />
        <div className="round-stamp"><span aria-hidden="true">✦</span><small>{copy.stamp[0]}<br />{copy.stamp[1]}</small></div>
        <div className="image-caption"><span aria-hidden="true">♡</span><strong>{copy.caption[0]}<br />{copy.caption[1]}</strong></div>
      </div>
      <div className="about-copy">
        <span className="section-kicker">{copy.kicker}</span>
        <h2>
          {site.aboutTitle.firstLine}<br />
          {site.aboutTitle.secondLine} <em>{site.aboutTitle.emphasis}</em>
        </h2>
        <p>{site.aboutText}</p>
        <p className="registration-note"><strong>{copy.registration}</strong> {site.registration}</p>
        <ul className="check-list">
          {copy.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <a className="button button-green" href="#contact">{copy.button} <Arrow /></a>
      </div>
    </section>
  );
}
