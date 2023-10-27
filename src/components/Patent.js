import React, { useState } from 'react';
import MyImage from './images/doremon.png';
import Nobit from './images/nobita.png';
import './ComicDialog.css';
import next from './images/next.png';
import anywhere from './images/anywhere.png';
import { useSharedVariable } from './SharedVariableContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function MyComponent() {
  const dialogues = ["First dialogue.", "Second dialogue.", "Nobita, you know this drawing I made of my amazing 'Anywhere Door'?", "Yeah, it's awesome, Doremon! What about it?", "Well, I invented a real 'Anywhere Door.' I could get something called a 'patent' for it.", "What's a patent?", "A patent is like a special certificate from the government. It says that I'm the only one who can make and use my 'Anywhere Door' for a certain amount of time, just like a magical spell.", "So, no one else can have an 'Anywhere Door' like yours?", "That's right! I get to be the only one for a while. It's like having a magical secret power, and my 'Anywhere Door' is the key.", "That sounds cool, Doremon! What if someone tries to copy your 'Anywhere Door'?", "If they do, I can tell them, 'Hey, you can't do that because I have a patent!' And they'll have to stop or ask my permission to use their own 'Anywhere Door.'", "So, it's like your special magical spell for your invention?", "Exactly, Nobita! It protects my hard work and ideas. It encourages people to come up with new and exciting inventions.", "That's awesome, Doremon! I'll make sure to ask for your permission if I ever want to make a magical invention like the 'Anywhere Door.'", "Thanks, Nobita! And remember, patents are there to make sure everyone's magical ideas are respected and rewarded."];
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showWhat, setShowWhat] = useState(false);
  const { updateSharedVariable } = useSharedVariable();
  const navigate = useNavigate(); // Get the navigate function

  const handleAnswer = (answer) => {
    if (answer === 'Yes') {
      alert("Ohh No! Because Doremon has a patent for it!");
    } else {
      updateSharedVariable();
      setShowQuestion(false);
      setShowQuestion1(true);
    }
  };

  const handleAnswer1 = (answer) => {
    if (answer === 'Yes') {
      alert("Ohh No! Because Doremon has a patent for it!");
    } else {
      updateSharedVariable();
      setShowQuestion(false);
      setShowQuestion1(false);
      setShowWhat(true);
      // Navigate to the home page

      alert("Fantastic you scored 100 points!... redirecting to homepage....");

      setTimeout(() => {
        navigate('/');
      }, 1500);// Redirect to the home page after 1.5 seconds

    }
  };

  const imageStyle = {
    position: 'absolute',
    top: '200px',
    left: '30px',
    width: '300px',
    height: '350px',
  };

  const nobistyle = {
    position: 'absolute',
    top: '200px',
    left: '600px',
    width: '300px',
    height: '350px',
  };
  const nextStyle = {
    position: 'absolute',
    top: '300px',
    left: '1000px',
    width: '300px',
    height: '20px',
  };
  const anyStyle = {
    position: 'absolute',
    top: '150px',
    left: '0px',
    width: '150px',
    height: '150px',
  };
  const toggleDialog = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 1) {
      setShowImage(true);
    }
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex((currentDialogueIndex + 1) % dialogues.length);
    } else {
      setShowQuestion(true);
    }
  };

  return (
    <div className="container">
      {clickCount !== 15 && (
        <div>
          <div>
            <img src={MyImage} alt="My Image" style={imageStyle} />
          </div>
          {showImage && (
            <div>
              <img src={anywhere} alt="My no" style={anyStyle} />
            </div>
          )}
          {clickCount > 1 && (
            <div className="comic-dialog-container">
              <div className="comic-dialog">
                <div className="comic-tail"></div>
                <div className="dialog-text">
                  {clickCount % 2 === 0 ? dialogues[currentDialogueIndex] : dialogues[currentDialogueIndex - 1]}
                </div>
              </div>
            </div>
          )}
          {clickCount !== 0 && (
            <div>
              <img src={Nobit} alt="My no" style={nobistyle} />
            </div>
          )}
          {clickCount % 2 !== 0 && clickCount >= 2 && (
            <div className="comic-dialog-container">
              <div className="comic-dialognoob">
                <div className="comic-tail"></div>
                <div className="dialog-text">
                  {dialogues[currentDialogueIndex]}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div>
        {showQuestion ? (
          <div>
            <img src={Nobit} alt="My no" style={{
              position: 'absolute',
              top: '150px',
              left: '490px',
              width: '280px',
              height: '300px'
            }} />
            <h1 style={{ textAlign: 'center' }}>Can Nobita make an 'Anywhere Door' without Doremon's permission?</h1>
            <button type="button" className="btn btn-danger btn-lg" style={{
              position: 'absolute',
              top: '66%',
              left: '40%',
              transform: 'translate(-50%, -50%)'
            }} onClick={() => handleAnswer('Yes')}>Yes</button>
            <button type="button" className="btn btn-primary btn-lg" style={{
              position: 'absolute',
              top: '66%',
              left: '60%',
              transform: 'translate(-50%, -50%)'
            }} onClick={() => handleAnswer('No')}>No</button>
          </div>) : (<div style={nextStyle} onClick={toggleDialog}><img src={next} alt="no" /></div>)}
      </div>
      <div>
        {showQuestion1 ? (
          <div>
            <img src={MyImage} alt="My Image" style={{
              position: 'absolute',
              top: '70px',
              left: '490px',
              width: '280px',
              height: '320px'
            }} />
            <h1 style={{ textAlign: 'center' }}>Why didn't Nobita steal my idea?</h1>
            <button type="button" className="btn btn-danger btn-lg" style={{
              position: 'absolute',
              top: '66%',
              left: '35%',
              transform: 'translate(-50%, -50%)'
            }} onClick={() => handleAnswer('Yes')}>Because he is honest</button>
            <button type="button" className="btn btn-primary btn-lg" style={{
              position: 'absolute',
              top: '66%',
              left: '65%',
              transform: 'translate(-50%, -50%)'
            }} onClick={() => handleAnswer1('No')}>Because I have a patent</button>
          </div>) : (<div style={nextStyle} onClick={toggleDialog}><img src={next} alt="no" /></div>)}
      </div>
      <div>
        {showWhat ? (
          <div>
            <img src={MyImage} alt="My Image" style={{
              position: 'absolute',
              top: '70px',
              left: '490px',
              width: '280px',
              height: '320px'
            }} />
            <h1 style={{ textAlign: 'center' }}>Why didn't Nobita steal my idea?</h1>
            <button type="button" className="btn btn-danger btn-lg" style={{
              position: 'absolute',
              top: '66%',
              left: '35%',
              transform: 'translate(-50%, -50%)'
            }} onClick={() => handleAnswer('Yes')}>Because he is honest</button>
            <button type="button" className="btn btn-primary btn-lg" style={{
              position: 'absolute',
              top: '66%',
              left: '65%',
              transform: 'translate(-50%, -50%)'
            }} onClick={() => handleAnswer1('No')}>Because I have a patent</button>
          </div>) : (<div style={nextStyle} onClick={toggleDialog}><img src={next} alt="no" /></div>)}
      </div>
    </div>
  );
}

export default MyComponent;
