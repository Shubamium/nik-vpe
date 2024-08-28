import React from "react";
import "./generalPoints.scss";
import { fetchData, urlFor } from "@/app/db/db";
type Props = {};

export default async function GeneralPoints({}: Props) {
  const data = await fetchData<any>(`
		*[_type == "general" && preset == 'main']{
			points_a,
			points_b,
	}[0]
	`);
  console.log(data);
  return (
    <section id="points">
      <div className="point">
        <article>
          <div className="head">
            <h2>{data.points_a?.title}</h2>
            <p>{data.points_a?.subtitle}</p>
          </div>
          <p className="desc">{data.points_a?.description}</p>
        </article>
        <figure>
          <img
            src={data.points_a?.image && urlFor(data.points_a?.image).url()}
            alt=""
          />
        </figure>
      </div>

      <div className="point reverse">
        <figure>
          <img
            src={data.points_b?.image && urlFor(data.points_b?.image).url()}
            alt=""
          />
        </figure>
        <article>
          <div className="head">
            <h2>{data.points_b?.title}</h2>
            <p>{data.points_b?.subtitle}</p>
          </div>
          <p className="desc">{data.points_b?.description}</p>
        </article>
      </div>
    </section>
  );
}
