import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import React from "react";
import "./education.scss";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_edu">
      <HeaderTwo title={"Education & Management"} />
      <section id="vtuber-education">
        <div className="confine">
          <div className="l">
            <h2>Vtuber Education</h2>
            <hr className="ll" />
            <p>
              With over 3 years of VTubing experience and a 2024 Comic Con
              VTuber panelist, Nikulas is ready to help you on your VTUBING
              journey - starting with the basics to the advanced.
            </p>
            <p>
              If you ever wanter to get more information about Vtubing form a
              veteran. now is the perfect time!
            </p>
          </div>
          <div className="c">
            <div className="media"></div>
          </div>
          <div className="r">
            <div className="media"></div>
            <div className="media"></div>
          </div>
        </div>
      </section>
      <section id="program-list">
        <div className="confine">
          <div id="pl-h">
            <h2>Programs</h2>
            <hr className="ll" />
          </div>

          <div className="pl-l">
            <div className="pl">
              <div className="l">
                <div className="media"></div>
              </div>
              <div className="r">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <hr className="cl" />
              </div>
            </div>
            <div className="pl">
              <div className="l">
                <div className="media"></div>
              </div>
              <div className="r">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <hr className="cl" />
              </div>
            </div>
            <div className="pl">
              <div className="l">
                <div className="media"></div>
              </div>
              <div className="r">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <hr className="cl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />
    </main>
  );
}
