const pdf = require('pdf-parse');
const fs = require('fs');

function parsePDF(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);
  return pdf(dataBuffer).then(data => data.text);
}
