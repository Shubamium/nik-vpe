import React from "react";
import "./heroSection.scss";
import { fetchData, urlFor } from "@/app/db/db";
type Props = {};

export default async function HeroSection({}: Props) {
  const data = await fetchData<any>(`
		*[_type == "general" && preset == 'main']{
			hero,
	}[0]
	`);
  // console.log(data);
  return (
    <article id="hero">
      <div className="confine">
        <div className="text-part">
          <div className="title">
            <h2 className="shine">{data.hero?.title}</h2>
            <p>{data.hero?.subtitle}</p>
            <img src="/decors/hero-decor.png" alt="" className="decor-side" />
          </div>
          <p className="desc">{data.hero?.description}</p>
        </div>
        <figure>
          <img
            src={data.hero?.image && urlFor(data.hero?.image).url()}
            alt=""
          />
        </figure>
      </div>
    </article>
  );
}
