const path = require('path');
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

// The site's HTML/CSS/JS must stay at the repo root — GitHub Pages serves
// this same root directly and only looks for index.html there. So instead
// of restricting express.static to a subfolder, allowlist exactly the
// client files this server should hand out, which keeps server.js,
// package.json, package-lock.json, and .git unreachable over HTTP.
const ALLOWED_FILES = new Set([
    'index.html',
    'styles.css',
    'script.js',
    'manifest.json',
    'icon-192x192.png',
    'icon-512x512.png'
]);

app.use((req, res, next) => {
    const filename = req.path === '/' ? 'index.html' : req.path.replace(/^\//, '');
    if (!ALLOWED_FILES.has(filename)) return res.status(404).end();
    next();
});

app.use(express.static(__dirname, { dotfiles: 'deny' }));

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