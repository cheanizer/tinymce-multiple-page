const fs = require('fs');
const HTMLtoDOCX = require('html-to-docx');
const juice = require('juice');

const convert = async () => {
  // 1. Read HTML content from oke.html file
  const htmlString = fs.readFileSync('oke.html', 'utf-8');

  // 2. Inline CSS styles using juice
  const inlinedHtml = juice(htmlString);

  // 3. Set Document Options (Margins, Orientation, etc.)
  const fileBuffer = await HTMLtoDOCX(inlinedHtml, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  // 3. Save the Buffer to a file
  fs.writeFileSync('oke.docx', fileBuffer);
  console.log('Successfully created oke.docx from oke.html');
};

convert();