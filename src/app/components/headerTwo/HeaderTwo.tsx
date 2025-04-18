import React from "react";
import "./headerTwo.scss";
import Link from "next/link";
type Props = {};

export default function HeaderTwo({ title }: { title: string }) {
  return (
    <header id="header-alt">
      <div className="confine">
        <nav id="alt-navigation">
          <Link href={"/"} className="btn btn-nav">
            Home
          </Link>
          <Link href={"/education"} className="btn btn-nav">
            Education
          </Link>
          <Link href={"/commissions"} className="btn btn-nav">
            Commissions
          </Link>
          <Link href={"/talents"} className="btn btn-nav">
            Talents
          </Link>
          <Link href={"/artists"} className="btn btn-nav">
            Artists
          </Link>
        </nav>
        <div className="title-part">
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
}
