import { useEffect, useState } from "react";
import { NGO_DATA } from "./data.js";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import logo from "../logo.jpg";

function GetInvolved() {
  const actions = [
    { icon: "♧", title: "Find a program", detail: "Discover ways to help" },
    { icon: "⌖", title: "Volunteer locally", detail: "Make an impact nearby" },
    { icon: "♡", title: "Support a cause", detail: "Every contribution matters" },
  ];

  return (
    <section className="quick-search" aria-label="Get involved">
      {actions.map((action) => (
        <div className="quick-item" key={action.title}>
          <span className="quick-icon" aria-hidden="true">{action.icon}</span>
          <div><strong>{action.title}</strong><small>{action.detail}</small></div>
        </div>
      ))}
      <a className="button button-green" href="#contact">Get involved <span aria-hidden="true">↗</span></a>
    </section>
  );
}

function Programs({ programs }) {
  return (
    <section className="programs section" id="programs">
      <div className="section-heading">
        <div><span className="section-kicker">Our focus areas</span><h2>Opportunity in action</h2></div>
        <p>Practical programs helping children, families, and communities thrive.</p>
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

function Initiatives({ initiatives, branches }) {
  return (
    <>
      <section className="initiatives section" id="initiatives">
        <div className="section-heading">
          <div><span className="section-kicker">Beyond our core programs</span><h2>Showing up for our community</h2></div>
          <p>Local campaigns and community activities documented by the organization.</p>
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
          <div><span className="section-kicker">Across Prayagraj</span><h2 id="branches-title">Free learning centers</h2></div>
          <p>The brochure lists six community learning branches serving local children.</p>
        </div>
        <div className="branch-grid">
          {branches.map((branch) => (
            <div className="branch-card" key={branch.name}>
              <strong>{branch.name}</strong><span>{branch.location}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Gallery({ images }) {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-heading">
        <div><span className="section-kicker">Real work, real change</span><h2>Our community in action</h2></div>
        <p>Photos from Swadesh Seva Sansthan's education programs and community events.</p>
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

function Impact({ impact }) {
  return (
    <section className="impact section" id="impact">
      <div className="impact-heading">
        <span className="section-kicker">The change we work toward</span>
        <h2>A stronger future<br /><em>for every community.</em></h2>
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

function Donation({ donation }) {
  return (
    <section className="donate section" id="donate">
      <div className="donate-copy">
        <span className="section-kicker">Be part of the change</span>
        <h2>Support our work<br /><em>for every community.</em></h2>
        <p>Donations support free education and community programs for children and families in need.</p>
        <div className="donation-details">
          <strong>Bank transfer</strong>
          <span>{donation.accountName} · {donation.bank}</span>
          <span>Account No. {donation.accountNumber}</span>
          <span>IFSC: {donation.ifsc}</span>
        </div>
        <a className="button button-light" href="#contact">Make a difference <span aria-hidden="true">↗</span></a>
      </div>
      <div className="donate-art" aria-hidden="true">
        <div className="sun" /><div className="leaf leaf-one">❧</div>
        <div className="leaf leaf-two">❧</div><div className="plant-pot" />
      </div>
    </section>
  );
}

function Footer({ site }) {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label={`${site.name} home`}>
        <img className="brand-logo" src={logo} alt="" /><span>{site.name}</span>
      </a>
      <p>Equal opportunity. Stronger communities.</p>
      <a className="footer-website" href={site.website} target="_blank" rel="noreferrer">swadeshsevasansthan.in</a>
      <span className="footer-socials">Also on {site.socialPlatforms.join(" · ")}</span>
      <span className="copyright">© {new Date().getFullYear()} {site.name} · Society Reg. {site.registration}</span>
    </footer>
  );
}

export default function App() {
  const { site, programs, branches, initiatives, gallery, impact, donation } = NGO_DATA;
  const [theme, setTheme] = useState("light");
  const phoneNumber = site.phone.replace(/\D/g, "");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#151c17" : "#fbfaf6",
    );
  }, [theme]);

  return (
    <>
      <div className="site-shell" data-theme={theme}>
        <Header
          name={site.name}
          theme={theme}
          onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")}
        />
        <main>
          <Hero site={site} />
          <GetInvolved />
          <About site={site} />
          <Programs programs={programs} />
          <Initiatives initiatives={initiatives} branches={branches} />
          <Gallery images={gallery} />
          <Impact impact={impact} />
          <Donation donation={donation} />
          <Contact site={site} />
        </main>
        <Footer site={site} />
      </div>
      <FloatingActions phone={site.phone} whatsappNumber={phoneNumber} />
    </>
  );
}
