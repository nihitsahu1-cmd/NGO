import { useState } from "react";
import Arrow from "./Arrow.jsx";

export default function Contact({ site }) {
  const [formNote, setFormNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    setFormNote(`Thanks, ${name}! This demo form is ready to connect to your email or backend.`);
    event.currentTarget.reset();
  }

  return (
    <section className="contact section" id="contact">
      <div>
        <span className="section-kicker">Say hello</span>
        <h2>Let’s make good<br /><em>things happen.</em></h2>
        <p>Interested in volunteering, partnering, or learning more? Send us a note.</p>
        <div className="contact-details">
          {site.offices.map((office) => (
            <div className="contact-group" key={office.label}>
              <strong>{office.label}</strong>
              <span>{office.address}</span>
            </div>
          ))}
          <div className="contact-group">
            <strong>Contact No.</strong>
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
          </div>
          <div className="contact-group">
            <strong>Email</strong>
            {site.emails.map((email) => <a key={email} href={`mailto:${email}`}>{email}</a>)}
          </div>
          <div className="contact-group">
            <strong>Website</strong>
            <a href={site.website} target="_blank" rel="noreferrer">swadeshsevasansthan.in</a>
          </div>
          <div className="contact-group">
            <strong>Social</strong>
            <a href={site.socialUrl} target="_blank" rel="noreferrer">{site.socialHandle}</a>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Your name<input name="name" required placeholder="Enter your name" /></label>
        <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>
          How would you like to help?
          <select name="interest">
            <option>Volunteer</option><option>Donate</option>
            <option>Partner with us</option><option>Learn more</option>
          </select>
        </label>
        <label>Message<textarea name="message" rows="3" placeholder="Write a short message..." /></label>
        <button className="button button-green" type="submit">Send message <Arrow /></button>
        <p className="form-note" role="status">{formNote}</p>
      </form>
    </section>
  );
}
