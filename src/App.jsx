import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faVimeoV, faSpotify, faBandcamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from './white_logo_transparent_background.png';




function App() {
  const canvasRef = useRef(null);
  // State variable to store the user's manual choice (null if no choice has been made)
  const [userChoice, setUserChoice] = useState(null);

  // State variable for the hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect if the user prefers a dark color scheme
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = userChoice !== null ? userChoice : prefersDarkScheme;

  const handleNavClick = (item) => {
    setActiveCard(activeCard === item ? null : item);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  window.addEventListener('resize', handleWindowResize);
  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Define gradient colors based on the preferred color scheme
    const colorStart = isDarkMode ? '#585359' : '#9b939f';
    const colorMiddle = isDarkMode ? '#26364a' : '#435e80';
    const colorEnd = isDarkMode ? '#1d2938' : '#334963';

    const particles = [];
    const particlesCount = 200;
    const effectRadius = (10 / 100) * window.innerWidth; // 5vw radius
    const connectDistance = 100; // Maximum distance for connecting lines

    // Function to handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };


    class Particle {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = Math.random() * 1.2 - 0.5;
        this.speedY = Math.random() * 1.2 - 0.5;
      }
    
      update() {
        // Check for collision with the edges of the canvas
        if (this.size + this.x > canvas.width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }
        if (this.size + this.y > canvas.height || this.y - this.size < 0) {
          this.speedY = -this.speedY;
        }
        // Keep particles below the 60px mark to stay out of navbar position
        if (this.y - this.size < 120) {
          this.y = 120 + this.size;
          this.speedY = -this.speedY;
        }
    
        this.x += this.speedX;
        this.y += this.speedY;
    
        // Repel particles from the mouse
        const distanceX = mouse.x - this.x;
        const distanceY = mouse.y - this.y;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
        if (distance < effectRadius) {
          const forceDirectionX = distanceX / distance;
          const forceDirectionY = distanceY / distance;
          const maxDistance = effectRadius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * 10.5;
          const directionY = forceDirectionY * force * 10.5;
    
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    
      draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
  // Initialize particles
    for (let i = 0; i < particlesCount; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 5 + 0.1
        )
      );
    }

    const mouse = { x: null, y: null };

    canvas.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Animate particles
    function animate() {
      // Draw gradient background
      const backgroundGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      backgroundGradient.addColorStop(0, colorStart);
      backgroundGradient.addColorStop(0.5, colorMiddle); // Add this line
      backgroundGradient.addColorStop(1, colorEnd);
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      // Draw mouse effect
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, effectRadius);
      gradient.addColorStop(0, 'rgba(128, 128, 128, 0.3)');
      gradient.addColorStop(1, 'rgba(128, 128, 128, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, effectRadius, 0, Math.PI * 2);
      ctx.fill();
    
      // Draw particles and lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 0.1
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }
      // Add resize event listener
    window.addEventListener('resize', handleResize);
    animate();
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  const iconNavItems = [
    { icon: faGithub, url: 'https://github.com/' },
    { icon: faLinkedin, url: 'https://spotify.com/' },
    { icon: faBandcamp, url: 'https://bandcamp.com/' },
    { icon: faSpotify, url: 'https://spotify.com/' },
    { icon: faYoutube, url: 'https://youtube.com/' },
    { icon: faVimeoV, url: 'https://vimeo.com/' },
  ];

  return (
    <div className={`App${menuOpen ? " menu-open" : ""}`}>
      <div className="navbar">
        <div className="nav-item-toggle-button" onClick={() => setUserChoice(!isDarkMode)}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ color: isDarkMode ? '#f4ca15' : '#f0f1f3' }} />
        </div>
        <div className="logo-container" style={{ paddingLeft: window.innerWidth <= 768 ? '0' :  '15%' }}>
          <img src={logo} alt="Logo" className="navbar-logo"  />
        </div>

        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {windowWidth <= 768 ? "☰" : null}
        </div>
        <div className="nav-links">
          {windowWidth > 768
            ? iconNavItems.map((item, index) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className="nav-item">
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))
            : null}
        </div>
      </div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
export default App;