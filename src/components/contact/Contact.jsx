import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    emailjs.init('1fJuDws2qxj0FQSUc');
  }, []);

  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
    return () => {
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.querySelector('.glass-form-container');
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      container.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    };

    const handleMouseLeave = () => {
      const container = document.querySelector('.glass-form-container');
      if (container) {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    const currentTime = new Date().toLocaleString();

    try {
      await emailjs.send(
        'service_w96in71',          
        'template_uh2mfqu',         
        {
          name: formData.name,
         
          reply_to: formData.email,
          message: formData.message,
          time: currentTime,
          to_email: 'maurya.ritesh2005@gmail.com' 
        },
        '1fJuDws2qxj0FQSUc'          
      );

      setSubmitStatus("sent");
      setTimeout(() => {
        setSubmitStatus("");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("");
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const getButtonText = () => {
    if (submitStatus === "sending") return "Sending...";
    if (submitStatus === "sent") return "Sent! ✓";
    if (submitStatus === "error") return "Try Again";
    return "Send Message";
  };

  const getButtonClass = () => {
    let baseClass = "send-button";
    if (submitStatus === "sending") baseClass += " sending";
    if (submitStatus === "sent") baseClass += " sent";
    if (submitStatus === "error") baseClass += " error";
    return baseClass;
  };


  return (
    <section className="contact section" id="contact">
      <div className="particles" id="particles"></div>
      <div className="contact-section">
        <h2 className="main-title">Get in Touch!!</h2>
        <p className="subtitle">
          Have questions or ideas?{" "}
          <a
            href="https://www.linkedin.com/in/ritesh-maurya-7459s/"
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>{" "}
          is always open... no need to compile your message first! 😉
        </p>
        <div className="or-text">Or</div>
        <div className="glass-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-input form-textarea"
                placeholder="Write a message..."
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className={getButtonClass()}
              disabled={isSubmitting}
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
