import Media from "@/app/components/media/Media";
import { urlFor } from "@/app/db/db";
import React, { CSSProperties } from "react";

type Props = {};

export default function ComItem({ d }: any) {
  return (
    <div
      className="com-item"
      style={
        {
          "--bg": `url('${d?.bg ? urlFor(d.bg).height(1080).url() : "/backgrounds/bg-diamond.png"}')`,
        } as CSSProperties
      }
    >
      <div className="confine">
        <div className="ci-h">
          <h2 className="ct">{d?.n}</h2>
          <hr className="cl" />
          <p>{d?.d}</p>

          <div className="prices">
            <p>{d?.p}</p>
          </div>
        </div>

        <div className={`ci-m ${d?.ms} `}>
          {d?.ml &&
            d.ml.map((m: any) => {
              return (
                <Media
                  key={m._key}
                  mt={m.mt}
                  ytd={m.ytd}
                  img={
                    m.img ? urlFor(m.img).format("webp").height(900).url() : ""
                  }
                />
              );
            })}
        </div>
        <div className="ci-f">
          <p> {d?.bd}</p>
          <div className="fiverr">
            <p>Available at:</p>

            <div className="at">
              <a
                href={d?.fl}
                target="_blank"
                className={`btn btn-fiver ${d?.fl ? "" : "closed"}`}
              >
                <img src="/graphics/fiverr.png" alt="" />
              </a>
              <a
                href={d?.vl}
                className={`btn btn-fiver ${d?.vl ? "" : "closed"}`}
                target="_blank"
              >
                <img src="/graphics/vgen.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
