import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import React from "react";
import "./artists.scss";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
type Props = {};

export default function page({}: Props) {
  return (
    <div id="page_artists">
      <HeaderTwo title="Recommended Artists & Freelancers" />
      <section id="trusted">
        <div className="panel">
          <div className="confine">
            <img src="/graphics/shield.png" alt="" className="shield" />
            <div className="texts">
              <article className="l">
                <h2>Trusted Artists</h2>
                <hr className="ll" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris .
                </p>
              </article>
              <article className="r">
                <h2>Trusted Freelancers</h2>
                <hr className="ll" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris .
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="person-list">
        <div className="confine">
          <div className="pl">
            <div className="pfp"></div>
            <div className="detail">
              <div className="d-d">
                <h2>Akeno Arata</h2>
                <hr className="ll" />
                <p>
                  With over 3 years of VTubing experience and a 2024 Comic Con
                  VTuber panelist, Nikulas is ready to help you on your VTUBING
                  journey - starting with the basics to the advanced.{" "}
                </p>
              </div>
              <div className="d-f">
                <a href="#" className="btn btn-f">
                  <img src="/graphics/fiverr.png" alt="" />
                </a>
                <a href="#" className="btn btn-f closed">
                  <img src="/graphics/vgen.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="pl">
            <div className="pfp"></div>
            <div className="detail">
              <div className="d-d">
                <h2>Akeno Arata</h2>
                <hr className="ll" />
                <p>
                  With over 3 years of VTubing experience and a 2024 Comic Con
                  VTuber panelist, Nikulas is ready to help you on your VTUBING
                  journey - starting with the basics to the advanced.{" "}
                </p>
              </div>
              <div className="d-f">
                <a href="#" className="btn btn-f">
                  <img src="/graphics/fiverr.png" alt="" />
                </a>
                <a href="#" className="btn btn-f closed">
                  <img src="/graphics/vgen.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="pl">
            <div className="pfp"></div>
            <div className="detail">
              <div className="d-d">
                <h2>Akeno Arata</h2>
                <hr className="ll" />
                <p>
                  With over 3 years of VTubing experience and a 2024 Comic Con
                  VTuber panelist, Nikulas is ready to help you on your VTUBING
                  journey - starting with the basics to the advanced.{" "}
                </p>
              </div>
              <div className="d-f">
                <a href="#" className="btn btn-f">
                  <img src="/graphics/fiverr.png" alt="" />
                </a>
                <a href="#" className="btn btn-f closed">
                  <img src="/graphics/vgen.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />
    </div>
  );
}
