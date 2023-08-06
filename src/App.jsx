import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faVimeoV, faSpotify, faBandcamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../public/newMisaghLogo.png';

class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = Math.random() * 1.2 - 0.5;
    this.speedY = Math.random() * 1.2 - 0.5;
  }

  update() {
    if (this.size + this.x > window.innerWidth || this.x - this.size < 0) {
      this.speedX = -this.speedX;
    }
    if (this.size + this.y > window.innerHeight || this.y - this.size < 0) {
      this.speedY = -this.speedY;
    }
    if (this.y - this.size < 120) {
      this.y = 120 + this.size;
      this.speedY = -this.speedY;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw(ctx, effectRadius, mouse) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

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
}



class NewPageParticle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = Math.random() * 1.5 - 0.7;
    this.speedY = Math.random() * 1.5 + 0.7; // Positive speed for downward movement
    this.direction = Math.random() * Math.PI * 2; // Random direction in radians
  }

  update() {
    if (this.size + this.x > window.innerWidth || this.x - this.size < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.size > window.innerHeight) {
      this.speedY = Math.random() * 1.5 + 0.7; // Reset the speed if the particle reaches the bottom
      this.y = this.size; // Position the particle at the top
    }
    if (this.y - this.size < 0) {
      this.speedY = Math.abs(this.speedY); // Ensure that the speed is positive if the particle reaches the top
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw(ctx) {
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2; 
    ctx.save(); // Save the current state of the context
    ctx.translate(this.x, this.y); // Change the origin to the particle's center
    ctx.rotate(this.direction); // Rotate the context
    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.lineTo(this.size, this.size);
    ctx.lineTo(-this.size, this.size);
    ctx.closePath();
    ctx.stroke();
    ctx.restore(); // Restore the context to its previous state
  }
}

const iconNavItems = [
  { icon: faBandcamp, url: 'https://mani-music.bandcamp.com' },
  { icon: faGithub, url: 'https://github.com/' },
  { icon: faSpotify, url: 'https://spotify.com/' },
  { icon: faYoutube, url: 'https://youtube.com/' },
  { icon: faVimeoV, url: 'https://vimeo.com/' },
  { icon: faLinkedin, url: 'https://linkedin.com/' }, // Fixed the URL for LinkedIn
];

function App() {
  const backgroundCanvasRef = useRef(null);
  const canvasRef = useRef(null);
  const photoTextRef = useRef(null)
  const photoCardRef = useRef(null);

  const newPageCanvasRef = useRef(null);
  const [userChoice, setUserChoice] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newPage, setNewPage] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches; // Moved inside the App component
  const isDarkMode = userChoice !== null ? userChoice : prefersDarkScheme;

  const handleArrowClick = () => {
    // Start the fade-out
    setFadeOut(true);
  
    // After the transition duration (1 second in this example), toggle the newPage state
    setTimeout(() => {
      setNewPage(prevNewPage => !prevNewPage);
      // Optionally, reset the fadeOut state if you want to use it again later
      setFadeOut(false);
    }, 1500); // 1000ms equals the transition duration
  };

  const newPageRef = useRef(newPage); 



  // This function will update canvas dimensions and create a gradient
  const updateCanvasDimensions = (canvasRef, colorStart, colorEnd) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, colorStart);
    backgroundGradient.addColorStop(1, colorEnd);
    ctx.fillStyle = backgroundGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleClickOutside = (event) => {
    console.log('Clicked element:', event.target);  // Log the clicked element

    // Check if the clicked element is the image or the new-page-canvas
    const isImageClicked = event.target.tagName === 'IMG';
    const isNewPageCanvasClicked = event.target.className.includes('new-page-canvas');

    if (isImageClicked || isNewPageCanvasClicked) {
        setShowPhoto(false);
    }

    // Existing logic
    if (photoTextRef.current && !photoTextRef.current.contains(event.target) &&
        photoCardRef.current && !photoCardRef.current.contains(event.target)) {
        console.log('Outside of photo text and photo card detected');
        setShowPhoto(false);
    }
};

  const handleWindowResize = () => {
    const colorStart = isDarkMode ? '#141d28' : '#334c6c';
    const colorEnd = isDarkMode ? '#936d67' : '#ad817a';
    if (backgroundCanvasRef.current) {
      updateCanvasDimensions(backgroundCanvasRef, colorStart, colorEnd);
    }
    if (canvasRef.current) {
      updateCanvasDimensions(canvasRef, colorStart, colorEnd);
    }
    if (newPageCanvasRef.current) {
      updateCanvasDimensions(newPageCanvasRef, colorStart, colorEnd);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    newPageRef.current = newPage; // Update the ref whenever newPage changes
  }, [newPage]);

  useEffect(() => {
    handleWindowResize(); // Call the handleWindowResize function to draw the background when the component is mounted
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isDarkMode,newPage]);

  useEffect(() => {
    if (newPage) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;  
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particlesCount = window.innerWidth <= 768 ? 70 : 150; // 100 particles for small screens, 300 otherwise
    const effectRadius = (10 / 100) * window.innerWidth; // 5vw radius

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
      if (newPageRef.current) {
        window.cancelAnimationFrame(animationFrameId);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(animate);

      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, effectRadius);
      gradient.addColorStop(0, 'rgba(256, 256, 256, 0.1)');
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
        particles[i].draw(ctx, effectRadius, mouse);
      }
    }

    if (!newPage) {
      animate();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, newPage]);

  useEffect(() => {
    if (!newPage) return;

    const newPageCanvas = newPageCanvasRef.current;
    if (!newPageCanvas) return;
    const newPageCtx = newPageCanvas.getContext('2d');
    const newPageParticles = [];
    const newPageParticlesCount = 150;

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
      newPageCtx.clearRect(0, 0, newPageCanvas.width, newPageCanvas.height);

      for (let i = 0; i < newPageParticles.length; i++) {
        newPageParticles[i].update();
        newPageParticles[i].draw(newPageCtx);
      }

      requestAnimationFrame(animateNewPage);
    }

    animateNewPage();
  }, [newPage, isDarkMode]);

  return (
    <div className="page-container">
      <canvas ref={backgroundCanvasRef} className="background-canvas"></canvas>
      <div className={`App${menuOpen ? " menu-open" : ""}`}>
        {!newPage && (
          <>
            <div className={fadeOut ? "fade-out" : ""}>
              <div className="header-container">
                  <h1 className="header-text">MISAGH</h1>
                  <h1 className="header-text-2">AZIMI</h1>
              </div>
            </div>
            
 
            <div className={fadeOut ? "fade-out" : ""}>
              <div className={isDarkMode ? 'dark-mode' : ''}>
                <h1 className="description-text">/COMPOSER<br/>/DEVELOPER<br/>/LECTURER</h1>
                
              </div>
            </div>  
          </>
        )}
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
        <div className={fadeOut ? "fade-out" : ""}>
        {newPage && <div className="new-page-overlay"></div>}
        </div>

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
        <div className={fadeOut ? "fade-out" : ""}>
          {!newPage && <canvas ref={canvasRef} className="particles-canvas"></canvas>}
        </div>
        <div className={fadeOut ? "fade-out" : ""}>
        <div className="flex-container">
            <h1 className={newPage ? 'new-page-description' : ' hidden'}>I'm Misagh Azimi, an Iranian-German artist and lecturer. In my multifaceted work, I delve into music composition, coding, and the exploration of artificial intelligence. <br/><br/>I predominantly compose for performing arts and visual media such as theater, contemporary dance or short films. As a performing musician I release both under my <a href='https://open.spotify.com/artist/1bHPms3MQPuVx9thn1EeVJ?si=IQ7UTJ64Qguk8mN4KRy_4Q' target='_blank'>own name</a>, as well as <a href='https://mani-music.bandcamp.com/' target="_blank">MÁNĪ</a>.
                <br/><br/>My areas of scholary interest and research include artificial intelligence for creative applciations, music and digital media, music production and also video-game audio and music implimentation.<br/><br/>I hold a Master's degree in Music from Folkwang University of the Arts. I also hold a Machine Learning certificate from <a href='https://coursera.org/share/51c967c62634b2274f01707474fcd755' target='_blank'>Stanford Online</a>, and my skills as a Front-End Developer are certified by <a href='https://coursera.org/share/bb38f1df1f3cf19183f512eb5bb8283b' target='_blank'>Meta</a>.</h1>
            
            <div className="face-container">
                <h1 ref={photoTextRef} className={newPage ? 'my-face' : ' hidden'} onClick={() => setShowPhoto(!showPhoto)}>Click here to see my face!</h1>
                {showPhoto && (
                    <div className="photo-card">
                        <img src="/src/Misagh_Headshot.png" />
                    </div>
                )}
            </div>
        </div>

          <canvas ref={newPageCanvasRef} className={`new-page-canvas${newPage ? '' : ' hidden'}`}></canvas> {/* Render the new page canvas conditionally */}
        </div>
      </div>
      <button className="arrow-button" onClick={handleArrowClick}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
  
}

export default App;