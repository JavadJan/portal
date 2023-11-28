// pages/api/validate-email.js

import emailVerifier from 'email-verifier';

export default async function handler(req, res) {
  const { email } = req.body;

  const options = {
    sender: 'your-email@gmail.com', // Replace with a valid email address
    timeout: 5000, // Timeout for the verification process
  };

  emailVerifier.verify(email, options, (err, result) => {
    if (err) {
      console.error('Error verifying email address:', err);
      return res.status(500).json({ error: 'Error verifying email address' });
    }

    if (result.formatCheck && result.smtpCheck) {
      return res.status(200).json({ isValid: true });
    } else {
      return res.status(400).json({ isValid: false, error: 'Invalid email address or domain' });
    }
  });
}
