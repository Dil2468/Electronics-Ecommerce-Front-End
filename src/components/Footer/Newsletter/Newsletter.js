import "./Newsletter.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-letter">newsLetter </span>
        <span className="big-letter">SIGN UP FOR LATEST UPDATES AND OFFERS </span>

        <div className="form">
          <input type="email" placeholder="Email Address"></input>
          <button> Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy
        </div>
        <div className="socialmedia-icons">
          <div className="icons">
            {" "}
            <FaLinkedinIn size={14} />
          </div>
          <div className="icons">
            {" "}
            <FaFacebookF size={14} />{" "}
          </div>
          <div className="icons">
            {" "}
            <FaTwitter size={14} />
          </div>
          <div className="icons">
            {" "}
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
