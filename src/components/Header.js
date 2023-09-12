import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "/node_modules/flag-icons/css/flag-icons.min.css";


const Header = ({english, setEnglish}) => {

  const toggleLang = () => {
    setEnglish(!english)
  };

  return (
    <div className="header">
      <div className="name">Eirik Lysenstøen</div>
      <div className="header-links-container">
        <ul className="header-links-list">
          <li>
            <a className="nav-link" href="https://github.com/eirikslys">
             <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a className="nav-link" href="https://www.linkedin.com/in/eirik-lysenst%C3%B8en/">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className="nav-link" href="mailto:elysenstoen@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li >
          <div className="nav-link">
          {
            english === true ? <span onClick={toggleLang} className="flag fi fi-no"></span> : <span onClick={toggleLang} className="flag fi fi-gb"></span>
          }
          </div>
          <li>

          </li>
            
          {/* {currentTheme === 'light' ? (
            <li>
              <div onClick={onClick} className="nav-link">
                <i className="fas fa-moon"></i>
              </div>
            </li>
          ) : (
            <li>
              <div onClick={onClick} className="nav-link">
                <i className="fas fa-sun"></i>
              </div>
            </li>
          )} */}
    
        </ul>
      </div>
    </div>
  );
};

export default Header;
