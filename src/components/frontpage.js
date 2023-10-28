import React from 'react';
import download from './images/download.png';
import patent1 from './images/patent1.png';
import design_guard from './images/Design_Guard1.png';
import trademark1 from './images/trademark1.png';
import './front.css'
import { useNavigate } from 'react-router-dom';


function FrontPage() {

  const navigate = useNavigate();

  const handlePatentCardClick = () => {
    // Redirect to '/right2no' when Patent card is clicked
    navigate('/right2no');
  };

  const handleCopyrightCardClick = () => {

    navigate('/copyright')
  }

  const copyToClipboard = () => {
    const urlToCopy = window.location.href;
    const textField = document.createElement('textarea');
    textField.innerText = urlToCopy;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);

    // Display a "Link Copied" message (you can customize this message as needed)
    alert('Link Copied');
  };



  return (
    <div>
      <nav>
        <ul>
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="center-about nav-item"><a href="#about-section">About</a></li>
        <li><button className="share-button" onClick={copyToClipboard}>Share on Social Media</button></li>
        </ul>
      </nav>
      <div className="header">
        <h2>Intellectual Property Rights</h2>
      </div>
      <div className="container">
        <div className="card" onClick={handleCopyrightCardClick}>
          <h2>Copyright</h2>
          <p>
            Copyright is a legal protection granted to the original creators of various forms of creative work, such as literature, music, and art. It gives creators exclusive rights to reproduce, distribute, and display their work.
          </p>
          <img src={download} alt="Copyright" />
        </div>
        <div className="card" onClick={handlePatentCardClick}>
          <h2>Patent</h2>
          <p>
            A patent is a government grant that provides inventors with exclusive rights to their inventions for a certain period. It prevents others from making, using, or selling the patented invention without permission.
          </p>
          <img src={patent1} alt="Patent" />
        </div>
        <div className="card">
          <h2>Design</h2>
          <p>
            Design rights protect the unique visual design and appearance of products. They prevent others from copying or imitating the design of a product.
          </p>
          <img src={design_guard} alt="Design" />
        </div>
        <div className="card">
          <h2>Trademark</h2>
          <p>
            A trademark is a symbol, word, or phrase that distinguishes one company's goods or services from others. It helps establish brand identity and prevents others from using similar marks.
          </p>
          <img src={trademark1} alt="Trademark" />
        </div>
      </div>
      <div className="center-text">
        GTA: sandshore hackathon, we are team pattambi_bois.
      </div>

      <div className="about-section"> {/* New section for About Us */}
        <div className="about-text">
          <h2>About Us:</h2>
          <p>
            We believe that learning can be fun and educational. Our mission is to introduce kids to the fascinating world of Intellectual Property Rights (IPR) in an engaging and interactive way. We're here to inspire young minds, spark their creativity, and empower them to understand the importance of protecting their original ideas and creations.
          </p>
          <h2>Why Intellectual Property Rights for Kids?</h2>
          <p>
            In today's ever-changing world, creativity and innovation are essential skills. Understanding IPR is like having a superpower that allows you to protect your ideas and share them with the world. Whether it's an amazing invention, a beautiful drawing, a catchy tune, or a unique story, kids have the potential to create something incredible. And with the right knowledge, they can make sure their creations stay safe and respected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
