const fs = require("fs");
const pdf = require("html-pdf");

const htmlContent = fs.readFileSync("busdevemailinvoice.html", "utf8");
console.log('html')

const pdfOptions = { format: "Letter" };

pdf.create(htmlContent, pdfOptions).toFile("./output.pdf", (err, res) => {
  if (err) {
    return console.error(err);
  }
  console.log("PDF created:", res.filename);
});
