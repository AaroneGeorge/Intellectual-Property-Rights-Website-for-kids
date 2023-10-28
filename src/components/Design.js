import React, { useState } from 'react';
import teacher from './images/teacher.png'; 
import main from './images/main.png'; 
import students from './images/students.png'; 
import './ComicDialog.css';
import next from './images/next.png';
import copy from './images/copy.png';
import villain from './images/villain.png';
import pookalam from './images/pookalam.png';
import { useNavigate } from 'react-router-dom';

function Conversation() {

  const [clickCount, setClickCount] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showB1, setShowB1] = useState(false);
  const [showB2, setShowB2] = useState(false);
  const [showTeacherImage, setTeacherImage] = useState(true);
  const [showCopy, setCopy] = useState(false);
  const [showAnswer, setAnswer] = useState(5);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [currentDialogueIndext1, setCurrentDialogueIndext1] = useState(0);
  const [currentDialogueIndexm1, setCurrentDialogueIndexm1] = useState(0);
  const [currentDialogueIndexv1, setCurrentDialogueIndexv1] = useState(0);
  const navigate = useNavigate(); // Get the navigate function


  const handleAnswer = (answer) => {
    setShowQuestion(false);
    if (answer==='No'){
        setCopy(true);
        setAnswer(0);
    }
    else{
        setCopy(true);
        setAnswer(1);
    }
}

  const toggleDialog = () => {
    setClickCount(clickCount+1);
    setCurrentDialogueIndex(currentDialogueIndex + 1);
    if (clickCount%2!==1 && clickCount>2){
        setCurrentDialogueIndext1(currentDialogueIndext1 + 1);
        setCurrentDialogueIndexm1(currentDialogueIndexm1 + 1);
       if (clickCount===7 && clickCount===8){
        setCurrentDialogueIndexm1(currentDialogueIndexm1);
       }
        }
    if (clickCount===10 && showAnswer===0){
        alert("Please retry.");
        setTeacherImage(true);
        setAnswer(5);
        setCurrentDialogueIndex(0);
        setClickCount(0);
        setCurrentDialogueIndext1(0);
        setCurrentDialogueIndexm1(0);
        setCurrentDialogueIndexv1(0);

        setShowB1(false);

      setTimeout(() => {
        navigate('/design');
      }, 1000);// Redirect to the home page after 1.5 seconds

    }
    if (clickCount===12 && showAnswer===1){
        alert("Congratulations! You have gained a valuable lesson about Design Rights. Redirecting you to home page...");
        setTimeout(() => {
            navigate('/');
          }, 1000);
    }
    if (clickCount===10 && showAnswer===1){
        setCurrentDialogueIndexv1(currentDialogueIndexv1 + 1);

    }
    if (clickCount===1){
        setTeacherImage(false);
        setShowQuestion(true);
    }
    if (showCopy===true){
        setCopy(false);
        if (showAnswer===0){
            setShowB1(true);
        }
        else{
            setShowB2(true);
        }
        setCurrentDialogueIndext1(0);
    }
  }
  const teacherStyle = {
    position: 'absolute',
    top: '200px',
    left: '30px',
    width: '300px',
    height: '350px', // Adjust the height as needed
  };
  const teacherStyle1 = { //for all three people convo
    position: 'absolute',
    top: '200px',
    left: '2px',
    width: '300px',
    height: '350px', // Adjust the height as needed
  };

  const dialogStyleTeacher = { //for all 3 people convo
    width: '300px',             // Adjust the width as needed
    backgroundColor: '#f5f5f5',
    border: '2px solid #000',
    borderRadius: '10px',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    position: 'absolute',       // Change to 'relative' if needed
    top: '100px',               // Adjust the top position
    left: '150px',              // Adjust the left position
  };
  const dialogStyleMain = { //for all 3 people convo
    width: '300px',             // Adjust the width as needed
    backgroundColor: '#f5f5f5',
    border: '2px solid #000',
    borderRadius: '10px',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    position: 'absolute',       // Change to 'relative' if needed
    top: '100px',               // Adjust the top position
    left: '500px',              // Adjust the left position
  };
  const dialogStyleVillain = { //for all 3 people convo
    width: '300px',             // Adjust the width as needed
    backgroundColor: '#f5f5f5',
    border: '2px solid #000',
    borderRadius: '10px',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    position: 'absolute',       // Change to 'relative' if needed
    top: '100px',               // Adjust the top position
    left: '900px',              // Adjust the left position
  };

  const nextStyle = {
    position: 'absolute',
    top: '300px',
    left: '1000px',
    width: '300px',
    height: '20px', // Adjust the height as needed
  };
  const studentsStyle = {
    position: 'absolute',
    top: '200px',
    left: '600px',
    width: '400px',
    height: '350px', // Adjust the height as needed
  };
  const mainStyle = {
    position: 'absolute',
    top: '250px',
    left: '400px',
    width: '250px',
    height: '250px', // Adjust the height as needed
  };
  const poo1Style = {
    position: 'absolute',
    top: '150px',
    left: '500px',
    width: '300px',
    height: '210px', // Adjust the height as needed
  };
  const poo2Style = {
    position: 'absolute',
    top: '150px',
    left: '850px',
    width: '300px',
    height: '210px', // Adjust the height as needed
  };
  const villainStyle = {
    position: 'absolute',
    top: '250px',
    left: '700px',
    width: '250px',
    height: '250px', // Adjust the height as needed
  };
  const teacherdialogue=["Good morning students.","Todays assignment for everyone is to create a design for 'onam pookalam'. You can either take design rights or not. I leave the choice to you."]

  const studentDialogue=["Good morning ma'am","Ok ma'am"]

  const teacherB1=["Wow It looks so amazing!","You're welcome.","Oh but it looks very much similar to A's design. Hey A, did you take design rights?","If you had taken it, you could have proven this was your original design."]
  const mainB1=["Hi ma'am, I have completed my design. Have a look at it.","Thank you ma'am.","","No ma'am."];
  const villainB1=["I have also finished my design."]

  const teacherB2=["Wow It looks so amazing!","You're welcome.","Oh but it looks very much similar to A's design. Hey A, did you take design rights?","So you own the rights for this design. Hey B, Did you cheat?","Its okay. But you cannot have a design like A's because he owns the rights for that design."]
  const mainB2=["Hi ma'am, I have completed my design. Have a look at it.","Thank you ma'am.","","Yes ma'am."];
  const villainB2=["I have also finished my design.","Sorry ma'am. I had a look at his design."]
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: '50px'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Design Rights</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    </nav>
    <div className='container'>
      {showTeacherImage && (<div>
     <div>
        <img src={teacher} alt="My Image" style={teacherStyle} />
      </div>
      <div className="comic-dialog-container">
      <div className="comic-dialog">
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {teacherdialogue[currentDialogueIndex]}
        </div>
      </div>
    </div>
    <div>
        <img src={students} alt="My no" style={studentsStyle} />
      </div>
      <div className="comic-dialog-container">
      <div className="comic-dialognoob">
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {studentDialogue[currentDialogueIndex]}
        </div>
      </div>
    </div>
    </div>)}
    {showQuestion ? (
        <div>
            <img src={main} alt="My no" style={{
    position: 'absolute',
    top: '150px',
    left: '507px',
    width: '280px',
    height: '300px' }} />
          <h1 style={{textAlign: 'center',marginTop:'50px'}}>Do you want to take design rights?</h1>
          <button type="button" className="btn btn-primary btn-lg" style={{ position: 'absolute', top: '66%', left: '40%', transform: 'translate(-50%, -50%)' }} onClick={() => handleAnswer('Yes')}>Yes</button>
          <button type="button" className="btn btn-danger btn-lg" style={{ position: 'absolute', top: '66%', left: '60%', transform: 'translate(-50%, -50%)' }} onClick={() => handleAnswer('No')}>No</button>
        </div>): ( <div style={nextStyle} onClick={toggleDialog}><img src={next} alt="no" /></div>)}
    {!showQuestion && !showTeacherImage && showCopy &&  ( <div> <img src={copy} alt="My no" style={{
    position: 'absolute',
    top: '150px',
    left: '507px',
    width: '280px',
    height: '300px' }} /><h1 style={{textAlign: 'center',marginTop:'50px'}}>B peeks into A's design...</h1> </div>)}
    {showB1 && (<div>
     <div>
        <img src={teacher} alt="My Image" style={teacherStyle1} />
      </div>
      {clickCount%2!==1 && (<div className="comic-dialog-container">
      <div className="comic-dialog" style={dialogStyleTeacher}>
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {teacherB1[currentDialogueIndext1]}
        </div>
      </div>
    </div>)}
    <div>
        <img src={main} alt="My no" style={mainStyle} />
        <img src={pookalam} alt="My no" style={poo1Style} />
      </div>
      {clickCount!==7 && clickCount!==8 && (<div className="comic-dialog-container">
      <div className="comic-dialognoob" style={dialogStyleMain}>
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {mainB1[currentDialogueIndext1]}
        </div>
      </div>
    </div>)}
    {clickCount>=7 && (<div>
    <div>
        <img src={villain} alt="My Image" style={villainStyle} />
        <img src={pookalam} alt="My no" style={poo2Style} />
      </div>
      <div className="comic-dialog-container">
      <div className="comic-dialog" style={dialogStyleVillain}>
        <div className="comic-tail"></div>
        <div className="dialog-text">
        I have also finished my design.
        </div>
      </div>
    </div>
    </div>)}
    </div>)}

    {showB2 && (<div>
     <div>
        <img src={teacher} alt="My Image" style={teacherStyle1} />
      </div>
      {clickCount%2!==1 && (<div className="comic-dialog-container">
      <div className="comic-dialog" style={dialogStyleTeacher}>
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {teacherB2[currentDialogueIndext1]}
        </div>
      </div>
    </div>)}
    <div>
        <img src={main} alt="My no" style={mainStyle} />
        <img src={pookalam} alt="My no" style={poo1Style} />
      </div>
      {clickCount!==7 && clickCount!==8 && !(clickCount>10) && (<div className="comic-dialog-container">
      <div className="comic-dialognoob" style={dialogStyleMain}>
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {mainB2[currentDialogueIndext1]}
        </div>
      </div>
    </div>)}
    {clickCount>=7 && (<div>
    <div>
        <img src={villain} alt="My Image" style={villainStyle} />
        <img src={pookalam} alt="My no" style={poo2Style} />
      </div>
      <div className="comic-dialog-container">
      <div className="comic-dialog" style={dialogStyleVillain}>
        <div className="comic-tail"></div>
        <div className="dialog-text">
        {villainB2[currentDialogueIndexv1]}
        </div>
      </div>
    </div>
    </div>)}
    </div>)}
    </div>

    </>
  );
}

export default Conversation;
