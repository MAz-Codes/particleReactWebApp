import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faVimeoV, faSpotify, faBandcamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from './white_logo_transparent_background.png';

function App() {
  const canvasRef = useRef(null);
  const newPageCanvasRef = useRef(null);
  const [userChoice, setUserChoice] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newPage, setNewPage] = useState(false);
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = userChoice !== null ? userChoice : prefersDarkScheme;

  const handleArrowClick = () => {
    setNewPage(!newPage);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // This is the main page
  useEffect(() => {
    if (newPage) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Define gradient colors based on the preferred color scheme
    const colorStart = isDarkMode ? '#141d28' : '#687697';
    const colorEnd = isDarkMode ? '#936d67' : '#dca49b';

    const particles = [];
    const particlesCount = 200;
    const effectRadius = (10 / 100) * window.innerWidth; // 5vw radius


    class Particle {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = Math.random() * 1.2 - 0.5;
        this.speedY = Math.random() * 1.2 - 0.5;
      }

      update() {
        if (this.size + this.x > canvas.width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }
        if (this.size + this.y > canvas.height || this.y - this.size < 0) {
          this.speedY = -this.speedY;
        }
        if (this.y - this.size < 120) {
          this.y = 120 + this.size;
          this.speedY = -this.speedY;
        }

        this.x += this.speedX;
        this.y += this.speedY;

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

    let animationFrameId;

    function animate() {
      const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      backgroundGradient.addColorStop(0, colorStart);
      backgroundGradient.addColorStop(1, colorEnd);
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);

      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, effectRadius);
      gradient.addColorStop(0, 'rgba(256, 256, 256, 0.2)');
      gradient.addColorStop(1, 'rgba(128, 128, 128, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, effectRadius, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 0.1;
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
    }
    if (!newPage) {
      animate();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, newPage]);

  // This is the second page
// This is the second page
useEffect(() => {
  if (!newPage) return;

  const newPageCanvas = newPageCanvasRef.current;
  const newPageCtx = newPageCanvas.getContext('2d');
  newPageCanvas.width = window.innerWidth;
  newPageCanvas.height = window.innerHeight;

  // Define gradient colors (you can customize these)
  const colorStart = isDarkMode ? '#585359' : '#9b939f';
  const colorMiddle = isDarkMode ? '#26364a' : '#435e80';
  const colorEnd = isDarkMode ? '#1d2938' : '#334963';


  const newPageParticles = [];
  const newPageParticlesCount = 150;

  class NewPageParticle {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = Math.random() * 1.5 - 0.7;
      this.speedY = Math.random() * 1.5 + 0.7; // Positive speed for downward movement
    }
  
    update() {
      if (this.size + this.x > newPageCanvas.width || this.x - this.size < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y + this.size > newPageCanvas.height) {
        this.speedY = Math.random() * 1.5 + 0.7; // Reset the speed if the particle reaches the bottom
        this.y = this.size; // Position the particle at the top
      }
      if (this.y - this.size < 0) {
        this.speedY = Math.abs(this.speedY); // Ensure that the speed is positive if the particle reaches the top
      }
  
      this.x += this.speedX;
      this.y += this.speedY;
    }
  
    

    draw() {
      newPageCtx.fillStyle = 'gray';
      newPageCtx.beginPath();
      newPageCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      newPageCtx.closePath();
      newPageCtx.fill();
    }
  }

 // Initialize new page particles
for (let i = 0; i < newPageParticlesCount; i++) {
  newPageParticles.push(
    new NewPageParticle(
      Math.random() * newPageCanvas.width,
      0, // Start particles from the top
      Math.random() * 3 + 0.5
    )
  );
}


function animateNewPage() {
  const backgroundGradient = newPageCtx.createLinearGradient(0, 0, newPageCanvas.width, 0);
  backgroundGradient.addColorStop(0, colorStart);
  backgroundGradient.addColorStop(0.5, colorMiddle);
  backgroundGradient.addColorStop(1, colorEnd);
  newPageCtx.fillStyle = backgroundGradient;
  newPageCtx.fillRect(0, 0, newPageCanvas.width, newPageCanvas.height);

  for (let i = 0; i < newPageParticles.length; i++) {
    newPageParticles[i].update();
    newPageParticles[i].draw();
  }

  requestAnimationFrame(animateNewPage);
}

animateNewPage();
}, [newPage, isDarkMode]);

  const iconNavItems = [
    { icon: faBandcamp, url: 'https://mani-music.bandcamp.com' },
    { icon: faGithub, url: 'https://github.com/' },
    { icon: faSpotify, url: 'https://spotify.com/' },
    { icon: faYoutube, url: 'https://youtube.com/' },
    { icon: faVimeoV, url: 'https://vimeo.com/' },
    { icon: faLinkedin, url: 'https://linkedin.com/' }, // Fixed the URL for LinkedIn
  ];

  return (
    <div className="page-container">
      <div className={`App${menuOpen ? " menu-open" : ""}`}>
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
        <div className="navbar">
          <div className="nav-item-toggle-button" onClick={() => setUserChoice(!isDarkMode)}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ color: isDarkMode ? '#f4ca15' : '#ffffff' }} />
          </div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </div>
  
          <div className="hamburger-container">
            <div className="hamburger-menu" onClick={() => { setMenuOpen(!menuOpen); }}>
              ☰
            </div>
            {menuOpen && (
              <div className="nav-links-dropdown">
                {iconNavItems.map((item, index) => (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className="nav-item">
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {!newPage && <canvas ref={canvasRef}></canvas>}
        <canvas ref={newPageCanvasRef} className={`new-page-canvas${newPage ? '' : ' hidden'}`}></canvas> {/* Render the new page canvas conditionally */}
      </div>
      <button className="arrow-button" onClick={handleArrowClick}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
  
}

export default App;