import HeaderTwo from "@/app/components/headerTwo/HeaderTwo";
import React from "react";
import "./artists.scss";
import FooterTwo from "@/app/components/footerTwo/FooterTwo";
import { fetchData, urlFor } from "@/app/db/db";
type Props = {};

export default async function page({}: Props) {
  const a = await fetchData<any>(`*[_type == "artists" && preset == "main"][0]{
		...
	}`);

  return (
    <div id="page_artists">
      <HeaderTwo title="Recommended Artists & Freelancers" />
      <section id="trusted">
        <div className="panel">
          <div className="confine">
            <img src="/graphics/shield.png" alt="" className="shield" />
            <div className="texts">
              <article className="l">
                <h2>{a?.ms?.lt?.t}</h2>
                <hr className="ll" />
                <p>{a?.ms?.lt?.d}</p>
              </article>
              <article className="r">
                <h2>{a?.ms?.rt?.t}</h2>
                <hr className="ll" />
                <p>{a?.ms?.rt?.d}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="person-list">
        <div className="confine">
          {a?.pl?.map((p: any, i: number) => {
            return (
              <div className="pl" key={p._key}>
                <div className="pfp media">
                  <img
                    src={p.pfp ? urlFor(p.pfp).height(800).url() : ""}
                    alt=""
                  />
                </div>
                <div className="detail">
                  <div className="d-d">
                    <div className="ht">
                      <h2>{p.n}</h2>
                      <p className="r">{p.r}</p>
                    </div>
                    <hr className="ll" />
                    <p>{p.d}</p>
                  </div>
                  <div className="d-f">
                    <a
                      href={p.fl}
                      className={`btn btn-f ${p.fl ? "" : "closed"}`}
                    >
                      <img src="/graphics/fiverr.png" alt="" />
                    </a>
                    <a
                      href={p.vl}
                      className={`btn btn-f ${p.vl ? "" : "closed"}`}
                    >
                      <img src="/graphics/vgen.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="pl">
            <div className="pfp"></div>
            <div className="detail">
              <div className="d-d">
                <h2>Akeno Arata</h2>
                <hr className="ll" />
                <p>
                  With over 3 years of VTubing experience and a 2024 Comic Con
                  VTuber panelist, Nikulas is ready to help you on your VTUBING
                  journey - starting with the basics to the advanced.{" "}
                </p>
              </div>
              <div className="d-f">
                <a href="#" className="btn btn-f">
                  <img src="/graphics/fiverr.png" alt="" />
                </a>
                <a href="#" className="btn btn-f closed">
                  <img src="/graphics/vgen.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="pl">
            <div className="pfp"></div>
            <div className="detail">
              <div className="d-d">
                <h2>Akeno Arata</h2>
                <hr className="ll" />
                <p>
                  With over 3 years of VTubing experience and a 2024 Comic Con
                  VTuber panelist, Nikulas is ready to help you on your VTUBING
                  journey - starting with the basics to the advanced.{" "}
                </p>
              </div>
              <div className="d-f">
                <a href="#" className="btn btn-f">
                  <img src="/graphics/fiverr.png" alt="" />
                </a>
                <a href="#" className="btn btn-f closed">
                  <img src="/graphics/vgen.png" alt="" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <FooterTwo f={a?.f} />
    </div>
  );
}
