import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: parseInt(process.env.SMTP_PORT || '465') === 465, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/api/send-email', async (req, res) => {
    const { name, org, email, scope, objective } = req.body;

    if (!name || !email || !objective) {
        return res.status(400).json({ error: 'Name, email, and objective are required fields.' });
    }

    try {
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.RECEIVER_EMAIL,
            replyTo: email,
            subject: `New Contact from ${name} - ${scope || 'General Inquiry'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #7C3AED;">New Engagement Protocol Submitted</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Organization:</strong> ${org || 'N/A'}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Scope of Engagement:</strong> ${scope || 'N/A'}</p>
                    <h3>Strategic Objective:</h3>
                    <p style="background-color: #f4f4f5; padding: 15px; border-left: 4px solid #7C3AED; white-space: pre-wrap;">${objective}</p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
