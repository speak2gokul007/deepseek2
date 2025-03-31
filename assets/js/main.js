// Typewriter Effect
const typewriter = () => {
  const textElement = document.getElementById('typewriter-text');
  const descriptors = [
    "Tech Enthusiast",
    "SAP BASIS Administrator",
    "Python Programmer",
    "AI Enthusiast",
    "Cloud Technology Analyst"
  ];
  
  let i = 0;
  let j = 0;
  let isDeleting = false;
  let currentText = '';
  
  function type() {
    const fullText = descriptors[i];
    
    if (isDeleting) {
      currentText = fullText.substring(0, j - 1);
      j--;
    } else {
      currentText = fullText.substring(0, j + 1);
      j++;
    }
    
    textElement.textContent = currentText;
    
    if (!isDeleting && j === fullText.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % descriptors.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  
  if (textElement) setTimeout(type, 1000);
};

// Dark Mode Toggle
const themeToggle = () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
  
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  typewriter();
  themeToggle();
});