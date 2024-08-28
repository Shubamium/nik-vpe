import React from "react";
import { FaTwitch, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./footer.scss";
import { fetchData } from "@/app/db/db";
import { ImConnection } from "react-icons/im";
import { GoBrowser } from "react-icons/go";
import { PiBrowser, PiBrowsers } from "react-icons/pi";
import { BsBrowserChrome } from "react-icons/bs";
import { TbBrowser } from "react-icons/tb";
type Props = {};

export default async function Footer({}: Props) {
  const data = await fetchData<any>(`
		*[_type == "general" && preset == 'main']{
		footer,
		email,
		postage_top,
		postage_bottom,
	}[0]
	`);
  return (
    <footer id="footer">
      <div className="content">
        <div className="detail">
          <div className="head">
            <h2>{data.footer?.title}</h2>
            <p>{data.footer?.subtitle}</p>
          </div>
          <p className="desc">{data.footer?.description}</p>
        </div>
        <div className="socials">
          <a
            href="https://x.com/NikulasWraith"
            target="_blank"
            className=" btn btn-social"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.twitch.tv/nikulaswraith"
            target="_blank"
            className=" btn btn-social"
          >
            <FaTwitch />
          </a>
          <a
            href="https://nikulaswraith.com"
            target="_blank"
            className=" btn btn-social"
          >
            <TbBrowser />
          </a>
        </div>
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <a href={`mailto:${data.email}`} className="contact-box">
            <h3>EMAIL</h3>
            <p>{data.email}</p>
          </a>
          <div className="contact-box address">
            <h3>POSTAGE</h3>
            <p>{data.postage_top}</p>
            <p>{data.postage_bottom}</p>
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
