import React from "react";
import "./generalInfo.scss";
type Props = {};

export default function GeneralInfo({}: Props) {
  return (
    <section id="general-info">
      <div className="confine">
        <article>
          <div className="head">
            <h2 className="shine">A HEAD TEXT HERE</h2>
            <p>PRETITLE EXPLANATION</p>
          </div>
          <p className="desc">
            Nikulas Wraith is an American VTuber who is a Virtual Phantom
            trapped inside your computer and uploading 100% goober energy. He
            has a fun personality to talk about anything with anyone and always
            makes sure that his community is safe. He started back in September
            of 2021 and is celebrating his 3 years of content creating this
            September. Escape reality with him and enjoy a great stream.{" "}
          </p>
        </article>
        <figure>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </figure>
      </div>
    </section>
  );
}
