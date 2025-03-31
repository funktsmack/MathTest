const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;

// Basic security headers
app.use(helmet());

// Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Disable XSS protection for this simple app since we're not using forms
app.use(helmet.xssFilter({ setOnOldIE: true }));

// Serve static files from the current directory
app.use(express.static('./', {
    // Prevent directory listing
    setHeaders: (res, path) => {
        if (path.endsWith('/')) {
            res.setHeader('X-Content-Type-Options', 'nosniff');
        }
    }
}));

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`To access from your phone, use your computer's IP address: http://YOUR_IP:${port}`);
    console.log('Note: This server is for local network use only. Do not expose to the internet.');
}); 