import "./Footer.scss";

import payment from "../../assets/payments.png";

import { FaLocationArrow, FaMobileScreen, FaEnvelope } from "react-icons/fa6";
const Footer = () => {
  const date1 = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              {" "}
              000A mike Rd, Maniva, North Auckland , Auckland, 0000{" "}
            </div>
          </div>
          <div className="c-item">
            <FaMobileScreen style={{ flexShrink: 0 }} />
            <div className="text">Phone: 0000 121 21212</div>
          </div>
          <div className="c-item">
            <FaEnvelope style={{ flexShrink: 0 }} />
            <div className="text">Email:abc@abc.com </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">HeadPhones </div>
          <div className="text">Smart Watches </div>
          <div className="text">Bluetooth Speaker </div>
          <div className="text">Wireless Earbuds </div>
          <div className="text">Home Theatre </div>
          <div className="text">Projectors </div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home </div>
          <div className="text">About </div>
          <div className="text">Privacy Policy </div>
          <div className="text">Returns </div>
          <div className="text">Termas & Conditions </div>
          <div className="text">Contact US </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            &copy; {date1} <b>-Developed By DK|Design-</b>{" "}
          </div>

          <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
