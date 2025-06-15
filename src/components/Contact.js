"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    subject: "",
    message: "",
  })

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceID = "service_hhqewbq"
      const templateID = "template_nam3efr"
      const userID = "kMTryIOAsfpCp8i_f"

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone, // ✅ Send phone to EmailJS
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(serviceID, templateID, templateParams, userID)

      setSubmitStatus({
        submitted: true,
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus({
        submitted: true,
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm currently looking for new opportunities! Feel free to reach out if you have any questions or just want to say hi.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <div className="contact-icon email"><FaEnvelope /></div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>vivek.soni9891@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon phone"><FaPhoneAlt /></div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91-9891929073</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon location"><FaMapMarkerAlt /></div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="connect-text">
              <h4>Let's Connect</h4>
              <p>
                I'm actively seeking entry-level full-stack web developer positions. If you have an opportunity that aligns with my skills in both frontend and backend development, I'd love to connect and contribute to your team!
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            {/* ✅ New Phone Number Field */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus.submitted && (
              <div className={`submit-message ${submitStatus.success ? "success" : "error"}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
