// Create a style element for snowflake styles
const style = document.createElement('style');
style.innerHTML = `
  body {
      margin: 0;
      background-color: #282c34; /* Background color of the page */
      overflow: hidden; /* Prevent scrollbars from appearing */
  }

  .snowflake {
      position: fixed; /* Change to fixed for better scrolling effect */
      top: -10px;
      background: white;
      opacity: 0.8;
      pointer-events: none;
      border-radius: 50%;
      animation: fall linear infinite;
  }

  @keyframes fall {
      to {
          transform: translateY(100vh);
      }
  }
`;
document.head.appendChild(style);

// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    const size = Math.random() * 5 + 2; // Random size between 2px and 7px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position

    const duration = Math.random() * 3 + 2; // Random fall duration between 2s and 5s
    snowflake.style.animationDuration = `${duration}s`;

    document.body.appendChild(snowflake);

    // Remove snowflake after it falls
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Create snowflakes at a regular interval
setInterval(createSnowflake, 300); // Create a new snowflake every 300ms

// Allow scrolling on the page by changing body overflow to auto
document.body.style.overflow = 'auto';
