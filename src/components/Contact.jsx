import { useState } from "react";
import Arrow from "./Arrow.jsx";

export default function Contact({ site, copy }) {
  const [formNote, setFormNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    setFormNote(copy.thanks(name));
    event.currentTarget.reset();
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact-panel">
        <div className="contact-info">
          <span className="section-kicker">{copy.kicker}</span>
          <h2>{copy.title}<br /><em>{copy.emphasis}</em></h2>
          <p>{copy.description}</p>
          <div className="contact-details">
            {site.offices.map((office) => (
              <div className="contact-group" key={office.label}>
                <strong>{office.label}</strong>
                <span>{office.address}</span>
              </div>
            ))}
            <div className="contact-group">
              <strong>{copy.phone}</strong>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
            </div>
            <div className="contact-group">
              <strong>{copy.email}</strong>
              {site.emails.map((email) => <a key={email} href={`mailto:${email}`}>{email}</a>)}
            </div>
            <div className="contact-group">
              <strong>{copy.website}</strong>
              <a href={site.website} target="_blank" rel="noreferrer">swadeshsevasansthan.in</a>
            </div>
            <div className="contact-group">
              <strong>{copy.social}</strong>
              <a href={site.socialUrl} target="_blank" rel="noreferrer">{site.socialHandle}</a>
            </div>
          </div>
        </div>
        <div className="contact-form-card">
          <div className="contact-form-heading">
            <span className="section-kicker">{copy.formKicker}</span>
            <h3>{copy.formTitle}</h3>
            <p>{copy.formDescription}</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>{copy.name}<input name="name" required placeholder={copy.namePlaceholder} /></label>
            <label>{copy.emailLabel}<input name="email" type="email" required placeholder={copy.emailPlaceholder} /></label>
            <label>
              {copy.interestLabel}
              <select name="interest">
                {copy.interests.map((interest) => <option key={interest}>{interest}</option>)}
              </select>
            </label>
            <label>{copy.message}<textarea name="message" rows="3" placeholder={copy.messagePlaceholder} /></label>
            <button className="button button-green" type="submit">{copy.submit} <Arrow /></button>
            <p className="form-note" role="status">{formNote}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
