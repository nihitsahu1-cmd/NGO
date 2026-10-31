import Arrow from "./Arrow.jsx";

export default function Hero({ site }) {
  return (
    <section className="hero" id="home" style={{ "--hero-image": `url("${site.heroImage}")` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow"><span aria-hidden="true">✦</span> Swadesh Seva Sansthan · Prayagraj</span>
        <h1>
          {site.heroTitle.split("\n").map((line, index) => (
            <span key={`${index}-${line}`}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>
        <p>{site.heroText}</p>
        <p className="hero-motto">{site.motto}</p>
        <div className="hero-actions">
          <a className="button button-light" href="#programs">Explore our work <Arrow /></a>
          <a className="text-link" href="#about">Discover our story <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="hero-note">
        <span className="note-icon" aria-hidden="true">🌱</span>
        <span><strong>One community at a time</strong><small>Growing change that lasts</small></span>
      </div>
    </section>
  );
}
