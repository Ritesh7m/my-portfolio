import React, { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Create animated particles
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        // Random size variation
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  // Handle mouse movement for 3D effect
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

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("sent");
      setTimeout(() => {
        setSubmitStatus("");
        setFormData({ email: "", message: "" });
        setIsSubmitting(false);
      }, 2000);
    }, 1500);
  };

  const getButtonText = () => {
    if (submitStatus === "sending") return "Sending...";
    if (submitStatus === "sent") return "Sent! ✓";
    return "Send Message";
  };

  const getButtonClass = () => {
    let baseClass = "send-button";
    if (submitStatus === "sending") baseClass += " sending";
    if (submitStatus === "sent") baseClass += " sent";
    return baseClass;
  };

  return (
    <section className="contact section" id="contact">
      {/* Animated Particles Background */}
      <div className="particles" id="particles"></div>

      {/* Main Contact Content */}
      <div className="contact-section">
        <h2 className="main-title">Get in Touch!!</h2>
        
        <p className="subtitle">
          Have questions or ideas?{' '}
          <a 
            href="https://www.linkedin.com/in/ritesh-maurya-7459s/" 
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>{' '}
          is always open... no need to compile your message first! 😉
        </p>
        
        <div className="or-text">Or</div>
        
        <div className="glass-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
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