export default function convertTextToHtml(plainText: String) {
  // 1. Sanitize the input: replace special HTML characters with entities
  // to prevent unintended HTML rendering or security issues (XSS).
  let plaintext = "hello <img src='x' onerror='alert('XSS Attack')'/> world";
  let sanitizedText = plainText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2. Split the text into an array of paragraphs based on double line breaks.
  // The regex /\\n\\s*\\n/g looks for one or more newlines possibly with whitespace in between.
  let paragraphs = sanitizedText.split(/\n\s*\n/g);

  // 3. Wrap each non-empty paragraph in <p> tags and join them.
  let htmlOutput = paragraphs
    .map((para) => para.trim()) // Trim whitespace from each paragraph
    .filter((para) => para.length > 0) // Filter out empty strings
    .map((para) => `<p>${para}</p>`) // Wrap in <p> tags
    .join("\n"); // Join them with a newline for clean formatting

  return htmlOutput;
}

// Example Usage:
const inputText: String = `This is the first paragraph.
It spans multiple lines in the source text, but will be a single paragraph in HTML.

This is the second paragraph.
It is separated by a blank line (double newline) in the source text.`;

const htmlResult = convertTextToHtml(inputText);
console.log(htmlResult);
// Output:
// <p>This is the first paragraph.
// It spans multiple lines in the source text, but will be a single paragraph in HTML.</p>
// <p>This is the second paragraph.
// It is separated by a blank line (double newline) in the source text.</p>
