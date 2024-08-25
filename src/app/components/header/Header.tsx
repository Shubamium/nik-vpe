import React from "react";
import "./header.scss";
import { CgBrowser } from "react-icons/cg";
import { SiInternetexplorer } from "react-icons/si";
import { GrConnectivity } from "react-icons/gr";
import { FaAddressCard } from "react-icons/fa6";
type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <div className="sub">
        <div className="right">
          <p>
            <GrConnectivity /> VIRTUAL PHANTOM ENTERNTAINMENT LLC -
            business@vpe.digital
          </p>
        </div>
        <div className="left">
          <p>
            Virtual Phantom Entertainment LLC 5900 Balcones Drive, Suite 21277
            Austin, TX 78731
            <FaAddressCard />
          </p>
        </div>
      </div>
      <div className="main">
        <div className="center shine">
          <h1 className="">VIRTUAL PHANTOM </h1>
          <p className="subtitle">ENTERTAINMENT LLC</p>
        </div>
      </div>
    </header>
  );
}
