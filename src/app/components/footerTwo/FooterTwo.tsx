import React from "react";
import "./footerTwo.scss";
import { FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { PortableText } from "next-sanity";
type Props = {};

type CenterType = "contact" | "fiverr" | "text";
export default function FooterTwo({ f }: { f: any }) {
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
    text: (
      <div className="text">
        <p>{f && f.ct_t}</p>
      </div>
    ),
  };

  return (
    <footer id="footer-alt">
      <div className="l pt">
        <h2>{f?.lf?.title}</h2>
        <PortableText value={f?.lf?.description} />
      </div>
      {f && f.ct && (
        <div className="c">{centerPart[(f.ct as CenterType) ?? "text"]}</div>
      )}
      <div className="r pt">
        <h2>{f?.rf?.title}</h2>
        <PortableText value={f?.rf?.description} />
      </div>
    </footer>
  );
}
