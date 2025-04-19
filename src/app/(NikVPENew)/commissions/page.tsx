import React from "react";
import "./commissions.scss";
import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import ComItem from "./ComItem";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
import { fetchData } from "@/app/db/db";
type Props = {};

export default async function page({}: Props) {
  const comms =
    await fetchData<any>(`*[_type == 'commission' && preset == 'main'][0]{
		...,
	}`);
  console.log(comms);
  return (
    <main id="page_comms">
      <HeaderTwo title="Commissions" />
      {comms.cl &&
        comms.cl.map((cl: any) => {
          return <ComItem key={cl._key} d={cl} />;
        })}
      <FooterTwo f={comms?.f} />
    </main>
  );
}
