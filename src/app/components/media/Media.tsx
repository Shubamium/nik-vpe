import React from "react";

type Props = {};

export default function Media({
  mt = "image",
  img,
  ytd,
}: {
  mt?: "image" | "video";
  img: string;
  ytd?: string;
}) {
  return (
    <div className="media">
      {mt === "image" && <img src={img} alt="media" className="media__img" />}

      {mt === "video" && ytd && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${ytd}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
