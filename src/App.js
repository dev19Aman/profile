import './App.css';
import image from './assets/profile.jpeg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const App = () => {
  return (
    <main className="container">
      <section className="intro-section">
        <img src={image} alt="Your Name" className="profile-img" />
        <h1 className="heading">Aman kumar</h1>
           </section>
            <section className="connect-section">
           <ul className="social-links">
            <li><a href="https://github.com/dev19Aman"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/aman-kumar-9666b422a/"><FaLinkedin /></a></li>
             <li><a href="https://twitter.com/amandeve19"><FaTwitter /></a></li>
            </ul>
          </section>
          </main>
  );
}

export default App;
