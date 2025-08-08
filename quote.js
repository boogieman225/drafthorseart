const quotes = [
  {
    text: "First you go with the horse..<br>then the horse goes with you..<br>then you go together",
    author: "Tom Dorrance"
  },
  {
    text: "Everything forced and misunderstood can never be beautiful",
    author: "Xenophon"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Use innerHTML to allow line breaks to render correctly
  document.getElementById('quote-text').innerHTML = `"${selectedQuote.text}"`;
  document.getElementById('quote-author').textContent = `- ${selectedQuote.author}`;
}

window.onload = getRandomQuote;
