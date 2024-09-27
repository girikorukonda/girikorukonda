// Array of love quotes
const quotes = [ "Love is when the other person's happiness is more important than your own.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "To love and be loved is to feel the sun from both sides.",
  "In all the world, there is no heart for me like yours.",
  "I have waited for this moment to confess that you are my everything!"];

// Handle button click
document.getElementById('submitBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;

  if (name) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('message').innerHTML = `Dear ${name}, <br>${randomQuote}`;
    
    // Generate hearts
    generateHearts();
  } else {
    document.getElementById('message').innerHTML = "Please enter her name!";
  }
});

// Function to generate floating hearts
function generateHearts() {
  const heartsContainer = document.getElementById('hearts-container');
  heartsContainer.innerHTML = ''; // Clear old hearts

  for (let i = 0; i < 100; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    heartsContainer.appendChild(heart);
  }
}
