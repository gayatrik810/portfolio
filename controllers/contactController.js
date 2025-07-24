// server/controllers/contactController.js

const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    // --- Part 1: Save the message to your database ---
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
    } catch (dbError) {
        console.error('Database Save Error:', dbError);
        // We stop here if the database fails.
        return res.status(500).json({ success: false, message: 'Failed to save your message.' });
    }

    // --- Part 2: Send the email notification ---
    try {
        // First, check if the email credentials are even there
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials missing in .env file.");
        }
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Contact from ${name}`,
            text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        await transporter.sendMail(mailOptions);
        
        // If we reach here, everything worked!
        res.status(200).json({ success: true, message: 'Message sent successfully!' });

    } catch (emailError) {
        console.error('Email Sending Error:', emailError);
        // The message was saved to the database, but the email failed.
        // We still tell the user it was a success because their message IS saved.
        // This is a "graceful failure".
        res.status(200).json({ 
            success: true, 
            message: 'Your message was received! The email notification failed, but I will still see your message.' 
        });
    }
};