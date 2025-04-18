import React, { CSSProperties } from "react";

type Props = {};

export default function ComItem({ bg, title }: any) {
  return (
    <div
      className="com-item"
      style={{ "--bg": `url('${bg}')` } as CSSProperties}
    >
      <div className="confine">
        <div className="ci-h">
          <h2 className="ct">{title}</h2>
          <hr className="cl" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris .
          </p>

          <div className="prices">
            <p>$25 - $40</p>
          </div>
        </div>

        <div className="ci-m sixnine">
          <div className="media"></div>
          <div className="media"></div>
          <div className="media"></div>
          <div className="media"></div>
          <div className="media"></div>
        </div>
        <div className="ci-f">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris .
          </p>
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
        </div>
      </div>
    </div>
  );
}
