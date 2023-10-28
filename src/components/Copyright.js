import React, { useState } from 'react';
import './Copyright.css';

import a from './images/dora-copyright-story-images/1.png';
import b from './images/dora-copyright-story-images/2.png';
import c from './images/dora-copyright-story-images/3.png';
import d from './images/dora-copyright-story-images/4.png';
import e from './images/dora-copyright-story-images/5.png';
import f from './images/dora-copyright-story-images/6.png';
import g from './images/dora-copyright-story-images/7.png';
import h from './images/dora-copyright-story-images/8.png';
import i from './images/dora-copyright-story-images/9.png';
import j from './images/dora-copyright-story-images/10.png';
import k from './images/dora-copyright-story-images/11.png';
import l from './images/dora-copyright-story-images/12.png';
import m from './images/dora-copyright-story-images/13.png';
import n from './images/dora-copyright-story-images/14.png';
import o from './images/dora-copyright-story-images/15.png';

const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];

function Copyright() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formText, setFormText] = useState(''); // State to store the form input

  const showImage = (index) => {
    // Update the state to change the current image
    setCurrentIndex(index);
  };

  const handleFormChange = (e) => {
    setFormText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., submit the user's input to a server
    console.log('User submitted:', formText);
    // Clear the form input field
    setFormText('');

    alert('Good Answer, redirecting to main menu');
  // Clear the form input field
    setFormText('');

  // Redirect to the homepage after a delay
    setTimeout(() => {
      window.location.href = '/'; // Replace with the actual URL of your homepage
    }, 300); // 500 milliseconds (0.5 seconds)

  };

  return (
    <div className="slider-container background-copyright">
      <div className="image-slider">
        <img className="slider-image" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <div className="question"></div>
        <div className="options">
          {currentIndex === 5 ? (
            <>
              <button className="yes">YES</button>
              <button className="no">NO</button>
            </>
          ) : currentIndex === 11 ? (
            <>
              <button className="no">Because he was afraid of Dora</button>
              <button className="yes">Because Dora had a copyright over the poem</button>
            </>
          ) : currentIndex === 12 ? (
            <>
              <button className="yes">Because Dora had a copyright</button>
              <button className="no">the swiper was very generous</button>
            </>
          ) : currentIndex === 13 ? (
            <>
              <button className="no">A copyright is a poem</button>
              <button className="yes">A copyright is an IPR which protects things that people create</button>
            </>
          ) : currentIndex === 14 ? (
            <form onSubmit={handleFormSubmit}>
              <input type="text" value={formText} onChange={handleFormChange} />
              <button type="submit" className="submit-button">Submit</button>
            </form>

          ) : null}
        </div>
      </div>
      <div className="navigation">
        <button
          id="prev"
          onClick={() => showImage((currentIndex - 1 + images.length) % images.length)}
        >
          Previous
        </button>
        <button
          id="next"
          onClick={() => showImage((currentIndex + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Copyright;
