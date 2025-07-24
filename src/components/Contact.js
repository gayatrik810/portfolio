// client/src/components/Contact.js

import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    // State to manage the form's input fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to manage the form's submission status
    const [formStatus, setFormStatus] = useState({
        isSending: false,
        message: '',
        isError: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ isSending: true, message: '', isError: false });

        try {
            // This is the API call to your backend
            const response = await fetch('/api/contact', { // Using the new, correct route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                // If the server response is not 2xx, throw an error
                throw new Error(result.message || 'An error occurred.');
            }

            // Success!
            setFormStatus({ isSending: false, message: result.message, isError: false });
            setFormData({ name: '', email: '', message: '' }); // Clear the form

        } catch (error) {
            // Failure.
            setFormStatus({ isSending: false, message: error.toString(), isError: true });
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>
                        Have a project in mind or just want to say hello? I'd love to hear from you. 
                        Fill out the form or use the contact details below.
                    </p>
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <span>kadamgayatri.dyp@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <span>Pune, Maharashtra, India</span>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="submit-button" disabled={formStatus.isSending}>
                            {formStatus.isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    {/* Display success or error messages to the user */}
                    {formStatus.message && (
                        <p className={`result-message ${formStatus.isError ? 'error' : 'success'}`}>
                            {formStatus.message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;