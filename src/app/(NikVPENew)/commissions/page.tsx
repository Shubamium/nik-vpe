import React from "react";
import "./commissions.scss";
import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import ComItem from "./ComItem";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_comms">
      <HeaderTwo title="Commissions" />
      <ComItem
        bg={"/backgrounds/bg-diamond.png"}
        title={"Faux Magazine Cover"}
      />
      <ComItem bg={"/backgrounds/bg-x.png"} title={"Video Editing"} />
      <FooterTwo />
    </main>
  );
}
