"use client";
import React, { useState } from "react";
import "./headerTwo.scss";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsHouse, BsHouseFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiArrowDownWideLine } from "react-icons/ri";
type Props = {};

export default function HeaderTwo({ title }: { title: string }) {
  const [m, setM] = useState(false);

  return (
    <>
      <header id="header-alt">
        <div className="confine">
          <nav id="alt-navigation">
            <div
              className="btn btn-nav menu"
              onClick={() => {
                setM(true);
              }}
            >
              <GiHamburgerMenu />
            </div>
            <Link href={"/"} className="btn btn-nav menu">
              <BsHouseFill />
            </Link>
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
          <div className="title-part shine">
            <h1>{title}</h1>
          </div>
        </div>
      </header>

      <div
        className={`fs-nav ${m ? "vis" : "clo"}`}
        onClick={() => {
          setM(false);
        }}
      >
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
        <div onClick={() => setM(false)} className="btn btn-nav">
          <RiArrowDownWideLine />
        </div>
      </div>
    </>
  );
}
