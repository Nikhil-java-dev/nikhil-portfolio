import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5scvttz",
      "template_cgaghun",
      e.target,
      "mqaV2IUtVKrBnVVW5"
    ).then(() => {
      setMsg("✅ Message sent successfully!");
      e.target.reset();
    });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input name="user_name" placeholder="Your Name" required />
        <input name="user_email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button className="btn">Send Message</button>
      </form>

      {msg && <p className="success">{msg}</p>}
    </section>
  );
};

export default Contact;
