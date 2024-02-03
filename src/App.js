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
            <a href="https://www.behance.net/af910c71">
              <FcDribbble />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/shots/23549295-Home-Page-Orpect?utm_source=Clipboard_Shot&utm_campaign=amandeve&utm_content=Home%20Page%20%7C%20Orpect&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=amandeve&utm_content=Home%20Page%20%7C%20Orpect&utm_medium=Social_Share">
              <FaBehanceSquare />
            </a>
          </li>

          <li class="page-social relative">
            <a
              class="social-icon-anchor"
              aria-label="social-icon"
              data-type="social_link"
              target="__blank"
              rel="noopener nofollow"
              href="https://t.me/wemakedevs"
            >
              <svg
                class="social-icon-fill"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.5 14C26.5 20.9036 20.9036 26.5 14 26.5C7.09644 26.5 1.5 20.9036 1.5 14C1.5 7.09644 7.09644 1.5 14 1.5C20.9036 1.5 26.5 7.09644 26.5 14ZM28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM8.42392 13.7773C8.03172 13.9413 8.06041 14.5071 8.46718 14.6304L10.7136 15.3117C11.1423 15.4418 11.6065 15.3745 11.9809 15.1282L17.0455 11.7958C17.0677 11.7812 17.0902 11.7731 17.112 11.7703C17.2403 11.7537 17.3457 11.9207 17.2342 12.0302L13.5886 15.6099C13.4734 15.723 13.4032 15.8617 13.3756 16.0061C13.3184 16.305 13.4437 16.6283 13.7305 16.7996L17.8122 19.2373C18.27 19.5107 18.8589 19.236 18.9445 18.7092L20.3533 10.042C20.4485 9.45619 19.8636 8.99382 19.3167 9.2225L8.42392 13.7773ZM10.2782 16.7472C10.8278 16.9139 11.4067 16.918 11.9484 16.7692C12.098 17.2973 12.4404 17.7762 12.9614 18.0874L17.043 20.5251C18.4124 21.3429 20.17 20.5194 20.4251 18.9498L21.8338 10.2826C22.1172 8.53919 20.3751 7.15411 18.7381 7.83862L7.84525 12.3934C6.1565 13.0996 6.27877 15.5342 8.03183 16.0659L10.2782 16.7472Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default App;
