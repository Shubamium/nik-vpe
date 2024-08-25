import React from "react";
import "./heroSection.scss";
type Props = {};

export default function HeroSection({}: Props) {
  return (
    <article id="hero">
      <div className="confine">
        <div className="text-part">
          <div className="title">
            <h2 className="shine">VIRTUAL PHANTOM</h2>
            <p>ENTERTAINMENT LLC</p>
            <img src="/decors/hero-decor.png" alt="" className="decor-side" />
          </div>
          <p className="desc">
            At Virtual Phantom Entertainment LLC, we strive to make the best
            content for our viewers and subscribers who enjoy not only fun
            content on game plays but to have a great conversation as well. We
            have a great group of VTubers who associate with us and we&apo;re
            proud to have them with us and to share their experience and
            entertainment with you.{" "}
          </p>
        </div>
        <figure>
          <img src="/" alt="" />
        </figure>
      </div>
    </article>
  );
}
