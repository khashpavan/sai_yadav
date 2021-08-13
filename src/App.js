import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CarouselContainer from './components/CarouselContainer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Extras from './components/Extras';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <CarouselContainer/>
    <Particles
      params={{"particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#b6b2b2"
          },
          "polygon": {
            "nb_sides": 6
          }
        },
        "opacity": {
          "value": 0.5211089197812949,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8.017060304327615,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 12.181158184520175,
            "size_min": 0.1,
            "sync": true
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#c8c8c8",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
      }}
    />
    
    <Header/>
    
    {/* <About/> */}
    <Skills/>
    {/* <Projects/> */}
    {/* <Achievements/> */}
    <Extras/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
