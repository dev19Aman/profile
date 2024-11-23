import "./App.css";
import image3 from "./assets/Untitled design (6).png";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { FaBehanceSquare } from "react-icons/fa";
import { FcDribbble } from "react-icons/fc";


const App = () => {
  return (
    <main className="container">
      <section className="intro-section">
        <img src={image3} alt="Your Name" className="profile-img" />
        <h1 className="heading">Aman kumar</h1>
      </section>
      <section className="connect-section">
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/amandeve19">
              <CiTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/dev19Aman">
              <RiGithubLine />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aman-kumar-9666b422a/">
              <CiLinkedin />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/amandeve">
              <FcDribbble />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/af910c71">
              <FaBehanceSquare />
            </a>
          </li>

        </ul>
      </section>
    </main>
  );
};

export default App;
