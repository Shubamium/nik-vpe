import React from "react";
import "./generalInfo.scss";
import { fetchData, urlFor } from "@/app/db/db";
type Props = {};

export default async function GeneralInfo({}: Props) {
  const data = await fetchData<any>(`
		*[_type == "general" && preset == 'main']{
			general,
	}[0]
	`);
  console.log(data);

  return (
    <section id="general-info">
      <div className="confine">
        <article>
          <div className="head">
            <h2 className="shine">{data.general?.title}</h2>
            <p>{data.general?.subtitle}</p>
          </div>
          <p className="desc">{data.general?.description}</p>
        </article>
        <figure>
          <img
            src={data.general?.image_a && urlFor(data.general?.image_a).url()}
            alt=""
          />
          <img
            src={data.general?.image_b && urlFor(data.general?.image_b).url()}
            alt=""
          />
          <img
            src={data.general?.image_c && urlFor(data.general?.image_c).url()}
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}
