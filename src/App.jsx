import { useEffect, useState } from "react";
import { NGO_DATA } from "./data.js";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import logo from "../logo.jpg";
import { TRANSLATIONS } from "./translations.js";

function GetInvolved({ copy }) {
  return (
    <section className="quick-search" aria-label={copy.label}>
      {copy.actions.map((action, index) => (
        <div className="quick-item" key={action.title}>
          <span className="quick-icon" aria-hidden="true">{["♧", "⌖", "♡"][index]}</span>
          <div><strong>{action.title}</strong><small>{action.detail}</small></div>
        </div>
      ))}
      <a className="button button-green" href="#contact">{copy.label} <span aria-hidden="true">↗</span></a>
    </section>
  );
}

function Programs({ programs, copy }) {
  return (
    <section className="programs section" id="programs">
      <div className="section-heading">
        <div><span className="section-kicker">{copy.kicker}</span><h2>{copy.title}</h2></div>
        <p>{copy.description}</p>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <img src={program.image} alt={program.title} loading="lazy" />
            <div className="program-card-body">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <ul className="program-details">
                {program.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <a className="small-button" href="#contact">{program.button} <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Initiatives({ initiatives, branches, copy }) {
  return (
    <>
      <section className="initiatives section" id="initiatives">
        <div className="section-heading">
          <div><span className="section-kicker">{copy.initiatives.kicker}</span><h2>{copy.initiatives.title}</h2></div>
          <p>{copy.initiatives.description}</p>
        </div>
        <div className="initiative-grid">
          {initiatives.map((initiative) => (
            <article className="initiative-card" key={initiative.title}>
              <span className="initiative-mark" aria-hidden="true">✦</span>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="branches section" aria-labelledby="branches-title">
        <div className="section-heading">
          <div><span className="section-kicker">{copy.branches.kicker}</span><h2 id="branches-title">{copy.branches.title}</h2></div>
          <p>{copy.branches.description}</p>
        </div>
        <div className="branch-grid">
          {branches.map((branch) => (
            <article className="branch-card" key={branch.name}>
              <span className="branch-card-icon" aria-hidden="true">⌖</span>
              <div><strong>{branch.name}</strong><span>{branch.location}</span></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Gallery({ images, copy }) {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-heading">
      <div><span className="section-kicker">{copy.kicker}</span><h2>{copy.title}</h2></div>
      <p>{copy.description}</p>
      </div>
      <div className="gallery-grid">
        {images.map((item) => (
          <figure className="gallery-item" key={item.image}>
            <img src={item.image} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function Impact({ impact, copy }) {
  return (
    <section className="impact section" id="impact">
      <div className="impact-heading">
        <span className="section-kicker">{copy.kicker}</span>
        <h2>{copy.title}<br /><em>{copy.emphasis}</em></h2>
      </div>
      <div className="stats-grid">
        {impact.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong><span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Donation({ donation, copy }) {
  return (
    <section className="donate section" id="donate">
      <div className="donate-copy">
        <span className="section-kicker">{copy.kicker}</span>
        <h2>{copy.title}<br /><em>{copy.emphasis}</em></h2>
        <p>{copy.description}</p>
        <div className="donation-details">
          <strong>{copy.bankTransfer}</strong>
          <span>{donation.accountName} · {donation.bank}</span>
          <span>{copy.accountNumber} {donation.accountNumber}</span>
          <span>{copy.ifsc} {donation.ifsc}</span>
        </div>
        <a className="button button-light" href="#contact">{copy.button} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="donate-art" aria-hidden="true">
        <div className="sun" /><div className="leaf leaf-one">❧</div>
        <div className="leaf leaf-two">❧</div><div className="plant-pot" />
      </div>
    </section>
  );
}

function Footer({ site, copy }) {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label={`${site.name} home`}>
        <img className="brand-logo" src={logo} alt="" /><span>{site.name}</span>
      </a>
      <p>{copy.motto}</p>
      <a className="footer-website" href={site.website} target="_blank" rel="noreferrer">swadeshsevasansthan.in</a>
      <span className="footer-socials">{copy.socials} {site.socialPlatforms.join(" · ")}</span>
      <div className="footer-offices">
        {site.offices.map((office) => (
          <div className="footer-office" key={office.label}>
            <strong>{office.label}:</strong>
            <span>{office.address}</span>
          </div>
        ))}
      </div>
      <span className="copyright">© {new Date().getFullYear()} {site.name} · {copy.registration} {site.registration}</span>
      <span className="developer-credit">{copy.developer}</span>
    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const copy = TRANSLATIONS[language];
  const site = {
    ...NGO_DATA.site,
    ...copy.site,
    registration: NGO_DATA.site.registration,
    website: NGO_DATA.site.website,
    socialHandle: NGO_DATA.site.socialHandle,
    socialUrl: NGO_DATA.site.socialUrl,
    socialPlatforms: NGO_DATA.site.socialPlatforms,
    phone: NGO_DATA.site.phone,
    emails: NGO_DATA.site.emails,
    heroImage: NGO_DATA.site.heroImage,
    aboutImage: NGO_DATA.site.aboutImage,
  };
  const programs = NGO_DATA.programs.map((program, index) => ({
    ...program,
    ...copy.programs[index],
  }));
  const initiatives = copy.initiatives;
  const branches = copy.branches;
  const gallery = NGO_DATA.gallery.map((image, index) => ({
    ...image,
    alt: copy.galleryAlts[index],
  }));
  const impact = copy.impact;
  const donation = {
    ...NGO_DATA.donation,
    ...copy.donation,
    accountNumber: NGO_DATA.donation.accountNumber,
    ifsc: NGO_DATA.donation.ifsc,
  };
  const phoneNumber = site.phone.replace(/\D/g, "");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      copy.pageDescription,
    );
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#151c17" : "#fbfaf6",
    );
  }, [theme, language, copy]);

  return (
    <>
      <div className="site-shell" data-theme={theme}>
        <Header
          name={site.name}
          theme={theme}
          onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")}
          language={language}
          onToggleLanguage={() => setLanguage((current) => current === "en" ? "hi" : "en")}
          copy={copy}
        />
        <main>
          <Hero site={site} copy={copy.hero} />
          <GetInvolved copy={copy.getInvolved} />
          <About site={site} copy={copy.about} />
          <Programs programs={programs} copy={copy.programsSection} />
          <Initiatives initiatives={initiatives} branches={branches} copy={copy} />
          <Gallery images={gallery} copy={copy.gallerySection} />
          <Impact impact={impact} copy={copy.impactSection} />
          <Donation donation={donation} copy={copy.donationSection} />
          <Contact site={site} copy={copy.contact} />
        </main>
        <Footer site={site} copy={copy.footer} />
      </div>
      <FloatingActions phone={site.phone} whatsappNumber={phoneNumber} copy={copy.floating} />
    </>
  );
}
