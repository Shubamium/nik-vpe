import React from "react";
import "./generalPoints.scss";
type Props = {};

export default function GeneralPoints({}: Props) {
  return (
    <section id="points">
      <div className="point">
        <article>
          <div className="head">
            <h2>Something</h2>
            <p>Subtext</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <figure>
          <img src="" alt="" />
        </figure>
      </div>

      <div className="point reverse">
        <figure>
          <img src="" alt="" />
        </figure>
        <article>
          <div className="head">
            <h2>Something</h2>
            <p>Subtext</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </div>
    </section>
  );
}
