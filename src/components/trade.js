import React, { useEffect, useState } from 'react';
import './card.css';
import CardComponent from './cardComponent';

const navbarStyles = {
  backgroundColor: 'transparent',
  color: 'black',
  padding: '10px',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '10px',
};

const gradientBackground = {
  background: 'linear-gradient(to bottom, #edf7fd, #c5e9f4)',
  height: '100vh',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
};

function Navbar({ completedSets, totalSets }) {
  return (
    <>
      <div style={gradientBackground}></div>
      <nav style={navbarStyles}>
        <ul>
          <h3>Learn with Ease about Trademark</h3>
          <li>
            
          </li>
          <li>
            <div className="progress-bar1">
              <div
                className="progress-status1"
                style={{
                  width: `${(completedSets / totalSets) * 100}%`,
                }}
              ></div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Trade({ onCorrectChoice, completedSets }) {
  const totalSets = 3; // Total number of sets

  const [backgroundColor, setBackgroundColor] = useState('#edf7fd'); // Initial background color
  const transitionDuration = 15000; // Transition duration in milliseconds (15 seconds)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundColor('#c5e9f4'); // New background color
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [backgroundColor]);

  const animatedBackground = {
    ...gradientBackground,
    background: `linear-gradient(to bottom, ${backgroundColor}, #c5e9f4)`,
    transition: `background ${transitionDuration}ms`,
  };

  return (
    <div>
      <Navbar completedSets={completedSets} totalSets={totalSets} />
      <CardComponent onCorrectChoice={onCorrectChoice} totalSets={totalSets} />
      {/* Add your trade-related content here */}
      <div style={animatedBackground}></div>
    </div>
  );
}

export default Trade;
