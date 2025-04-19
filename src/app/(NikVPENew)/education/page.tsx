import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import React from "react";
import "./education.scss";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
import { fetchData, urlFor } from "@/app/db/db";
import { PortableText } from "next-sanity";
import Media from "@/app/components/media/Media";
type Props = {};

export default async function page({}: Props) {
  const ed =
    await fetchData<any>(`*[_type == 'education' && preset == 'main'][0]{
		...,
		f{
			ct,
			ct_t,
			lf,
			rf
		}
		}`);

  console.log(ed);
  return (
    <main id="page_edu">
      <HeaderTwo title={"Education & Management"} />
      <section id="vtuber-education">
        <div className="confine">
          <div className="l ">
            <h2>{ed.ms.t}</h2>
            <hr className="ll" />
            <PortableText value={ed.ms.d} />
            {/* <p>
              With over 3 years of VTubing experience and a 2024 Comic Con
              VTuber panelist, Nikulas is ready to help you on your VTUBING
              journey - starting with the basics to the advanced.
            </p>
            <p>
              If you ever wanter to get more information about Vtubing form a
              veteran. now is the perfect time!
            </p> */}
          </div>
          <div className="c">
            <Media img={urlFor(ed.ms.ia).format("webp").url()} />
          </div>
          <div className="r">
            <div className="media">
              <Media img={urlFor(ed.ms.ib).format("webp").url()} />
            </div>
            <div className="media">
              <Media img={urlFor(ed.ms.ic).format("webp").url()} />
            </div>
          </div>
        </div>
      </section>
      <section id="program-list">
        <div className="confine">
          <div id="pl-h">
            <h2>Programs</h2>
            <hr className="ll" />
          </div>

          <div className="pl-l">
            {ed.pl &&
              ed.pl.map((item: any, index: number) => {
                return (
                  <div className="pl" key={item._key}>
                    <div className="l">
                      <Media
                        img={urlFor(item.i).format("webp").height(900).url()}
                      />
                    </div>
                    <div className="r">
                      <div className="texts">
                        <PortableText value={item.d} />
                      </div>
                      <hr className="cl" />
                    </div>
                  </div>
                );
              })}
            {/* <div className="pl">
              <div className="l">
                <div className="media"></div>
              </div>
              <div className="r">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <hr className="cl" />
              </div>
            </div>
            <div className="pl">
              <div className="l">
                <div className="media"></div>
              </div>
              <div className="r">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ni
                </p>
                <hr className="cl" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <FooterTwo f={ed.f} />
    </main>
  );
}
