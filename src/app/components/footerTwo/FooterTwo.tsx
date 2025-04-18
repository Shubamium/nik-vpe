import React from "react";
import "./footerTwo.scss";
import { FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
type Props = {};

export default function FooterTwo({}: Props) {
  const centerPart = {
    contact: (
      <div id="contact">
        <p>
          Please consider checking out this VTubers social media accounts below:
        </p>

        <div className="clist">
          <a href="https://x.com/NikulasWraith" className="btn btn-c x ">
            {" "}
            <FaXTwitter />
          </a>
          <a href="https://www.twitch.tv/nikulaswraith" className="btn btn-c t">
            {" "}
            <FaTwitch />
          </a>
          <a
            href="https://www.youtube.com/@nikulaswraith"
            className="btn btn-c y"
          >
            {" "}
            <FaYoutube />
          </a>
        </div>
      </div>
    ),
    fiverr: (
      <div className="fiverr">
        <p>Available at:</p>

        <div className="at">
          <a href="https://x.com/NikulasWraith" className="btn btn-fiver ">
            <img src="/graphics/fiverr.png" alt="" />
          </a>
          <a href="https://x.com/NikulasWraith" className="btn btn-fiver ">
            <img src="/graphics/vgen.png" alt="" />
          </a>
        </div>
      </div>
    ),
  };

  return (
    <footer id="footer-alt">
      <div className="l pt">
        <h2>TALENTS OF VPE</h2>
        <p>
          <strong>All business inquiries please send to:</strong>
        </p>
        <p>business@vpe.digital</p>
      </div>
      <div className="c">{centerPart["fiverr"]}</div>
      <div className="r pt">
        <h2>NOTICE ◇</h2>
        <p>
          Not Allowed to copy images and use for A.I. training or sale for
          profit
        </p>
      </div>
    </footer>
  );
}
