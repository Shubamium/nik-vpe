import React from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import "./footer.scss";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <div className="content">
        <div className="detail">
          <div className="head">
            <h2>Something</h2>
            <p>Something ELSE</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.
          </p>
        </div>
        <div className="socials">
          <a href="#" target="_blank" className=" btn btn-social">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" className=" btn btn-social">
            <FaYoutube />
          </a>
        </div>
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <div className="contact-box">
            <h3>EMAIL</h3>
            <p>business@vpe.digital</p>
          </div>
          <div className="contact-box address">
            <h3>POSTAGE</h3>
            <p>Virtual Phantom Entertainment LLC</p>
            <p>
              5900 Balcones Drive, Suite 21277 Austin, TX 78731 United State
            </p>
          </div>
        </div>
      </div>
      <div className="extra">
        <div className="confine">
          <p className="copy">© VIRTUAL PHANTOM ENTERTAINMENT LLC</p>
          <a href="https://x.com/shubamium2" target="_blank">
            website design by <strong>shubamium</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
