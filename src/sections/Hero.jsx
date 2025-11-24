import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from './Cube';
import Rings from './Rings';
import ReactLogo from './ReactLogo';
import Button from './Button';
import Target from './Target';
import CanvasLoader from './CanvasLoader';
import HeroCamera from './HeroCamera';
import { calculateSizes } from '../constants';
import HackerRoom from './HackerRoom';

const Hero = () => {
  // media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="hero-section" id="home">
      <div className="ui-container">
        <p style={{ fontSize: 20, margin: 0 }}>
          Hi, I am Khushal <span style={{ marginLeft: 8 }}>👋</span>
        </p>
        <p style={{ color: 'var(--muted)' }}>Building Complex Projects & Grinding</p>
      </div>

      {/* Canvas wrapper behind UI (z-0) */}
      <div className="canvas-wrapper">
        {/* Make canvas transparent so it does not paint a black background over the page */}
        <Canvas
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          {/* A small loader — not a full-screen overlay — so once loaded it will unmount */}
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            {/* single camera that becomes default */}
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            {/* HeroCamera is a non-camera wrapper in this example, left for your custom logic */}
            <HeroCamera isMobile={isMobile}>
              {/* placeholder complex model */}
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={0.6} />
          </Suspense>
        </Canvas>
      </div>

      <div className="ui-container" style={{ position: 'absolute', bottom: 24, left: 0, right: 0 }}>
        <a href="#about" style={{ textDecoration: 'none' }}>
          <Button name="Let's work together" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
