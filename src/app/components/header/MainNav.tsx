"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

export default function MainNav({}: Props) {
  const [act, setAct] = useState(true);
  return (
    <nav className={`main-navigation  ${act ? "vis" : "clo"}`}>
      <div className="btn btn-main" onClick={() => setAct(!act)}>
        <GiHamburgerMenu />
      </div>
      <Link href={"/education"} className="btn btn-main full">
        Education
      </Link>
      <Link href={"/commissions"} className="btn btn-main full">
        Commissions
      </Link>

      <Link href={"/talents"} className="btn btn-main full">
        Talents
      </Link>
      <Link href={"/artists"} className="btn btn-main full">
        Artists
      </Link>
    </nav>
  );
}
