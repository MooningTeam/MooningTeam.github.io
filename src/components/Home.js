// Home.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-scroll';
import { Canvas } from 'react-three-fiber';

const Home = () => {
  const { scrollY } = useScroll();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.section style={{ ...props, transform: `translateY(${scrollY}px)` }}>
      <Canvas>
        {/* Your 3D scene goes here */}
      </Canvas>
      <h2 className="text-4xl">Welcome to my website</h2>
      {/* Other content */}
    </animated.section>
  );
};

export default Home;
