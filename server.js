/**
 * Cocobliss Chocolate Local Development Server
 * Pure Node.js built-in server with zero external dependencies.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Normalize URL to prevent directory traversal
  let safePath = path.normalize(decodeURI(req.url.split('?')[0])).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(ROOT_DIR, safePath);

  // Check if file exists within ROOT_DIR
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      // If file not found, try fallback or 404
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>404 Not Found - Cocobliss Chocolate</title>
          <style>
            body { font-family: sans-serif; background: #2B1704; color: #FDFBF7; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
            h1 { font-size: 3rem; color: #D4AF37; margin-bottom: 0.5rem; }
            a { color: #D4AF37; text-decoration: underline; }
          </style>
        </head>
        <body>
          <div>
            <h1>404</h1>
            <p>The requested artisanal page could not be found.</p>
            <p><a href="/">Return to Cocobliss Chocolate Home</a></p>
          </div>
        </body>
        </html>
      `);
      return;
    }

    if (stats.isDirectory()) {
      res.writeHead(302, { 'Location': req.url.endsWith('/') ? req.url + 'index.html' : req.url + '/' });
      res.end();
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    stream.on('error', () => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log('   ðŸ« Cocobliss Chocolate Artisan Website');
  console.log('====================================================');
  console.log(`âœ¨ Local preview running at: http://localhost:${PORT}`);
  console.log(`ðŸ“ Serving directory: ${ROOT_DIR}`);
  console.log('   Press Ctrl + C in terminal to stop');
  console.log('====================================================');
});

