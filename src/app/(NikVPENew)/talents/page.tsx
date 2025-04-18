import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import React from "react";

type Props = {};

import "./talents.scss";
import Scroller from "./Scroller";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
export default function page({}: Props) {
  return (
    <main id="page_talents">
      <HeaderTwo title="Talents" />
      <section id="talent-intro">
        <div className="confine">
          <div className="ti-h">
            <div className="media"></div>
            <h2>Nikulas Wraith</h2>
            <hr className="cl" />
            <p>
              Nikulas Wraith is an American Vtuber, He is your personal Virtual
              Phantom Assistan, uploading scuff and goober files on your gaming
              PC and mobile device.
            </p>
          </div>

          <div className="scroll-container">
            <Scroller />
          </div>
        </div>
      </section>
      <section id="livestream">
        <div className="confine">
          <div className="h">
            <h2>🔴 LIVE STREAM 🔴</h2>
          </div>
          <div className="lti">
            <div className="l panel">
              <h2>STREAMING</h2>
              <p>Tues. Thurs. Fri. 6PM CST </p>
            </div>
            <div className="c">
              <div className="media"></div>
            </div>
            <div className="r panel">
              <h2>OSHI MARK</h2>
              <p>💻👻</p>
            </div>
          </div>
          <div className="ml">
            <div className="media"></div>
            <div className="media"></div>
            <div className="media"></div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </main>
  );
}
