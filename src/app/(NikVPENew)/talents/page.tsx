import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import React from "react";

type Props = {};

import "./talents.scss";
import Scroller from "./Scroller";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
import { fetchData, urlFor } from "@/app/db/db";
import Media from "@/app/components/media/Media";
import { PortableText } from "next-sanity";
export default async function page({}: Props) {
  const talents =
    await fetchData<any>(`*[_type == 'talents' && preset == 'main'][0]{
		...}`);

  return (
    <main id="page_talents">
      <HeaderTwo title="Talents" />
      <section id="talent-intro">
        <div className="confine">
          <div className="ti-h">
            <Media
              mt="image"
              img={
                talents?.is?.mi && urlFor(talents.is.mi).format("webp").url()
              }
            />
            <h2>Nikulas Wraith</h2>
            <hr className="cl" />
            <p>{talents?.is?.d}</p>
          </div>

          <div className="scroll-container">
            <Scroller
              imgList={
                talents?.is?.il &&
                talents.is.il.map((m: any) => {
                  return urlFor(m).format("webp").url();
                })
              }
            />
          </div>
        </div>
      </section>
      <section id="livestream">
        <div className="confine">
          <div className="h">
            <h2>🔴 LIVE STREAM 🔴</h2>
          </div>
          <div className="lti">
            <div className="l panel">
              <h2>{talents?.ls?.l.t}</h2>
              <PortableText value={talents?.ls?.l?.d} />
            </div>
            <div className="c">
              <div className="media">
                <img
                  src={
                    talents?.ls?.mi
                      ? urlFor(talents?.ls?.mi).height(800).url()
                      : ""
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="r panel">
              <h2>{talents?.ls?.r.t}</h2>
              <PortableText value={talents?.ls?.r?.d} />
            </div>
          </div>
          <div className="kml">
            <Media
              mt={talents?.ls?.ma?.mt}
              ytd={talents?.ls?.ma?.ytd}
              img={
                talents?.ls?.ma
                  ? urlFor(talents?.ls?.ma.img).format("webp").height(900).url()
                  : ""
              }
            />
            <Media
              mt={talents?.ls?.mb?.mt}
              ytd={talents?.ls?.mb?.ytd}
              img={
                talents?.ls?.mb
                  ? urlFor(talents?.ls?.mb.img).format("webp").height(900).url()
                  : ""
              }
            />
            <Media
              mt={talents?.ls?.mc?.mt}
              ytd={talents?.ls?.mc?.ytd}
              img={
                talents?.ls?.mc
                  ? urlFor(talents?.ls?.mc.img).format("webp").height(900).url()
                  : ""
              }
            />
          </div>
        </div>
      </section>
      <FooterTwo f={talents.f} />
    </main>
  );
}
