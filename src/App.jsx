import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faVimeoV, faSpotify, faBandcamp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../public/newMisaghLogo.png';
import Face from "/src/assets/Misagh_face.jpg"
import { useTranslation } from 'react-i18next';
import i18n from "/src/i18n.jsx"
import Music from './Music';
import Video from './Video';
import Research from './Research';
import Contact from './Contact';
import CookieBanner from './CookieBanner';



//Web particle system for front page
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

//Dropping particle system for first page
class NewPageParticle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = Math.random() * 1.5 - 0.7;
    this.speedY = Math.random() * 0.8 + 0.2; // Positive speed for downward movement
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
    ctx.strokeStyle = 'white';
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

//colorful particle system for second page
class SecondNewPageParticles {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = Math.random() * 1.2 - 0.5;
    this.speedY = Math.random() * 1.2 - 0.5;
    this.color = `rgb(${Math.floor(Math.random() * 256)}, 
                     ${Math.floor(Math.random() * 256)}, 
                     ${Math.floor(Math.random() * 256)})`;
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
    ctx.fillStyle = this.color;
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

const iconNavItems = [
  { icon: faBandcamp, url: 'https://mani-music.bandcamp.com' },
  { icon: faGithub, url: 'https://github.com/MAz-Codes' },
  { icon: faSpotify, url: 'https://open.spotify.com/artist/0py5114d1Up5J4gmgtKyvH?si=3S6PseAMTCSp_gXQZSbp5Q' },
  { icon: faYoutube, url: 'https://www.youtube.com/results?search_query=mânī' },
  { icon: faVimeoV, url: 'https://vimeo.com/user29170569' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/misagh-azimi' },
  { icon: faInstagram, url: 'https://www.instagram.com/_manimusic_/?hl=en'},
];

function App() {

  const { t } = useTranslation();

  const backgroundCanvasRef = useRef(null);
  const canvasRef = useRef(null);
  const photoTextRef = useRef(null)
  const photoCardRef = useRef(null);
  const secondNewPageCanvasRef = useRef(null);
  const newPageCanvasRef = useRef(null);
  const musicRef = useRef(null);
  const videoRef = useRef(null);
  const researchRef = useRef(null);
  const contactRef = useRef(null);

  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showMusic, setShowMusic] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [newPageFadeOut, setNewPageFadeOut] = useState(false);
  const [shouldFadeSecondPage, setShouldFadeSecondPage] = useState(false);
  const [frontPage, setFrontPage] = useState(true);
  const [secondNewPage, setSecondNewPage] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newPage, setNewPage] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = userChoice !== null ? userChoice : prefersDarkScheme;


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const handleArrowClick = () => {
    setFadeOut(true);

    if (secondNewPage) {
      setShouldFadeSecondPage(true);  // Start the fade-out for the secondNewPage canvas

      setTimeout(() => {
          setFrontPage(true);
          setSecondNewPage(false);
          setNewPage(false);
          setShouldFadeSecondPage(false);  // Reset the fade-out state after transition
          setFadeOut(false);  // <-- Reset the fadeOut state here
      }, 3000);
      return;
  }

    if (newPage) {
      setNewPageFadeOut(true);
      setTimeout(() => {
          setSecondNewPage(true);
          setNewPage(false);
          setNewPageFadeOut(false);
      }, 1400);
      return;
  }

    if (frontPage) {
      setTimeout(() => {
          setFrontPage(false);
          setNewPage(true);
          setFadeOut(false);
          if (newPageCanvasRef.current) {
            newPageCanvasRef.current.style.display = 'block';
          }
      }, 1500);
  }
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
    console.log('Clicked element:', event.target);

    const isImageClicked = event.target.tagName === 'IMG';
    const isNewPageCanvasClicked = String(event.target.className).includes('new-page-canvas');
    const isFlexContainerRightClicked = event.target.classList.contains('flex-container-right') || event.target.closest('.flex-container-right');
    const isNewPageDescriptionClicked = event.target.classList.contains('new-page-description') || event.target.closest('.new-page-description');
    if (isImageClicked || isNewPageCanvasClicked || isFlexContainerRightClicked || isNewPageDescriptionClicked) {
        setShowPhoto(false);
    }

    if (photoTextRef.current && !photoTextRef.current.contains(event.target) &&
        photoCardRef.current && !photoCardRef.current.contains(event.target)) {
        console.log('Outside of photo text and photo card detected');
        setShowPhoto(false);
    }
    if (musicRef.current && !musicRef.current.contains(event.target)) {
      setShowMusic(false);
    }
    if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false);
    }
    if (researchRef.current && !researchRef.current.contains(event.target)) {
        setShowResearch(false);
    }
    if (contactRef.current && !contactRef.current.contains(event.target)) {
        setShowContact(false);
    }
  };

  //function for the Esc key to close all the opened windows
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      // Close all windows/modals
      setShowPhoto(false);
      setShowMusic(false);
      setShowVideo(false);
      setShowResearch(false);
      setShowContact(false);
    }
  };

  const handleWindowResize = () => {
  const colorStart = isDarkMode ? '#141d28' : '#334c6c';
  const colorEnd = isDarkMode ? '#936d67' : '#ad817a';
  window.addEventListener('resize', handleWindowResize);
  if (backgroundCanvasRef.current) {
    updateCanvasDimensions(backgroundCanvasRef, colorStart, colorEnd);
  }
  if (canvasRef.current) {
    updateCanvasDimensions(canvasRef, colorStart, colorEnd);
  }
  if (newPageCanvasRef.current) {
    updateCanvasDimensions(newPageCanvasRef, colorStart, colorEnd);
  }
  if (secondNewPageCanvasRef.current) {
    const canvas = secondNewPageCanvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  };

  //checking if the device is a touch cellphone, because of the second page particle games
  const isCellphone = () => {
    const widthThreshold = 768;
    const userAgent = navigator.userAgent;

    const mobileKeywords = [
      'Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows Phone'
    ];

    if (window.innerWidth <= widthThreshold) {
      return mobileKeywords.some(keyword => userAgent.includes(keyword));
    }
    return false;
  };

  //listener for Esc key
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

//local stoprage for cookie consent
  useEffect(() => {
    const choice = localStorage.getItem('cookieChoice');
    if (choice === 'accepted' || choice === 'declined') {
      setShowCookieBanner(false);
    }
  }, []);

  useEffect(() => {
    if (frontPage) {
        handleWindowResize();
    }
  }, [frontPage]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    newPageRef.current = newPage;
  }, [newPage]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isDarkMode, newPage]);



//PARTICLE ANIMATIONS AND SHOWING

  //Home Page Particle Animations
  useEffect(() => {
    if (newPage || secondNewPage) return;
    const canvas = canvasRef.current;
    if (!canvas) return;  
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particlesCount = window.innerWidth <= 768 ? 70 : 200;
    const effectRadius = (10 / 100) * window.innerWidth;

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
  }, [isDarkMode, newPage,secondNewPage]);

  //First Page Particle Animations
  useEffect(() => {
    if (!newPage || secondNewPage) return;

    const newPageCanvas = newPageCanvasRef.current;
    if (!newPageCanvas) return;
    const newPageCtx = newPageCanvas.getContext('2d');
    const newPageParticles = [];
    const newPageParticlesCount = 50;

    for (let i = 0; i < newPageParticlesCount; i++) {
      newPageParticles.push(
        new NewPageParticle(
          Math.random() * newPageCanvas.width,
          0, // Start particles from the top
          Math.random() * 3 + 0.2
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
  }, [newPage, isDarkMode, secondNewPage]);

  //Second Page Particle Animations
  useEffect(() => {
    if (!secondNewPage) return;
    const canvas = secondNewPageCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particlesCount = window.innerWidth <= 768 ? 350 : 1000;
    const effectRadius = (10 / 100) * window.innerWidth;

    for (let i = 0; i < particlesCount; i++) {
      particles.push(
        new SecondNewPageParticles(
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

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
}, [isDarkMode, secondNewPage]);





  return (
    <div className="page-container">
      <canvas ref={backgroundCanvasRef} className="background-canvas"></canvas>
      
      <div className={`App${menuOpen ? " menu-open" : ""}`}>

        {frontPage && (
          <div className={fadeOut ? "fade-out" : ""}>
            <div className="header-container">
              <h1 className="header-text">{t('header.firstName')}</h1>
              <h1 className="header-text-2">{t('header.lastName')}</h1>
            </div>
            <div className={isDarkMode ? 'dark-mode' : ''}>
              <h1 className="description-text">{t('jobs.composer')}<br/>{t('jobs.developer')}<br/>{t('jobs.lecturer')}</h1>
              {
  showCookieBanner && (
    <CookieBanner className="cookie-banner"
      onAccept={() => {
        setShowCookieBanner(false);
        localStorage.setItem('cookieChoice', 'accepted');
      }}
      onDecline={() => {
        window.location.href = "https://google.com";
        localStorage.setItem('cookieChoice', 'declined');
      }}
    />
  )
}
            </div>
            <div className={`${!newPage || (newPage && !secondNewPage) ? "" : "fade-out"}`}>
                <canvas ref={canvasRef} className="particles-canvas"></canvas>
            </div>
          </div>
        )}
          <div className="phone-container">
  {secondNewPage && isCellphone() && (
    <div className="mobile-joke">You are not enjoying this, because you are on your phone/tablet. Change to a desktop!</div>
  )}
</div>
          {secondNewPage && (
          <canvas ref={secondNewPageCanvasRef} className={`second-new-page-particles-canvas${shouldFadeSecondPage ? ' fade-out-canvas' : ''}`}></canvas>
          )}

          {showMusic && newPage && <Music className="fade-in" ref={musicRef} style={{ zIndex: 10000, position: 'fixed' }} onClose={() => setShowMusic(false)} />}
          {showVideo && newPage && <Video ref={videoRef} style={{ zIndex: 10000, position: 'fixed' }} onCloseVideo={() => setShowVideo(false)} />}
          {showResearch && newPage && <Research ref={researchRef} style={{ zIndex: 10000, position: 'fixed' }} onCloseResearch={() => setShowResearch(false)} />}
          {showContact && newPage && <Contact ref={contactRef} style={{ zIndex: 10000, position: 'fixed' }} onCloseContact={() => setShowContact(false)} />}


        {newPage && !secondNewPage && (
          <div className={`new-page-layout${fadeOut ? " fade-out" : ""}`}>
            <div className="flex-container">
              <h1 className='new-page-description'>{t('bio.one')}<br/><br/>{t('bio.two')} <a href="https://linktr.ee/misaghazimi" target='_blank'>{t('bio.perform')}</a>{t('bio.two2')}<a href='https://open.spotify.com/artist/0py5114d1Up5J4gmgtKyvH?si=6qXG4aoBS0yzy3RAPmod1Q' target="_blank">{t('bio.mani')}</a> {t('bio.three')} <a href='https://open.spotify.com/artist/1bHPms3MQPuVx9thn1EeVJ?si=apIhj5-RSXOFcBVTa6WvOA' target='_blank'>{t('bio.four')}</a>.
                  <br/><br/>{t('bio.five')}<br/><br/>{t('bio.six')} <a href='https://coursera.org/share/51c967c62634b2274f01707474fcd755' target='_blank'>{t('bio.stanford')}</a>{t('bio.seven')}<a href='https://coursera.org/share/bb38f1df1f3cf19183f512eb5bb8283b' target='_blank'>{t('bio.meta')}.</a> {t('bio.faEnd')}</h1>
              <div className="face-container">
                <h1 className= "face-text" ref={photoTextRef} onClick={() => setShowPhoto(!showPhoto)}>{t('bio.eight')}</h1>
                {showPhoto && (
                  <div className="photo-card">
                    <img src={Face} alt="Misagh Headshot"/>
                  </div>
                )}
              </div>
            </div>
            <div className='flex-container-right'>
              <h1 className="page-links" onClick={() => setShowMusic(true)}>{t('links.music')}</h1>
              <h1 className="page-links" onClick={() => setShowVideo(true)}>{t('links.video')}</h1>
              <h1 className="page-links" onClick={() => setShowResearch(true)}>{t('links.research')}</h1>
              <h1 className="page-links" onClick={() => setShowContact(true)}>{t('links.contact')}</h1>
            </div>
          </div>
        )}
        {menuOpen && (
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>
        )}
        {newPage && !secondNewPage && (
          <div className={fadeOut ? "fade-out" : ""}>
            <div className="new-page-overlay"></div>
          </div>
        )}
        {secondNewPage && (
          <div className='second-new-page'>
            <h1></h1>
          </div>
        )}
        <div className="navbar">
          <div className="nav-item-toggle-button" onClick={() => setUserChoice(!isDarkMode)}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ color: isDarkMode ? '#f4ca15' : '#ffffff' }} />
          </div>
          <div className="logo-container">
            <a href="/">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </a>
          </div>
          <div className='language-buttons'>
            <button className='language-en' onClick={() => changeLanguage('en')}>EN </button>
            <button className='language-de' onClick={() => changeLanguage('de')}>DE </button>
            <button className='language-fa' onClick={() => changeLanguage('fa')}>فارسی</button>
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
        {newPage && !secondNewPage && (
          <canvas ref={newPageCanvasRef} className={`new-page-canvas${newPageFadeOut ? ' fade-out-canvas' : ''}`}></canvas>
        )}
      </div>
      {!showMusic && !showVideo && !showContact && !showResearch && (
  <button className="arrow-button" onClick={handleArrowClick}>
    <div className="arrow-text">
      {secondNewPage ? t("arrow.home") : (newPage ? t("arrow.play") : t("arrow.me"))}
    </div>
    <FontAwesomeIcon className="arrow" icon={faArrowDown} />
  </button>
      )}
    </div>
  );
}
export default App;