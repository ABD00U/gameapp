/* eslint-disable @next/next/no-img-element*/
/* eslint-disable jsx-a11y/alt-text*/
// @ts-nocheck
import Link from "next/link";
import React from "react";
import Image from "next/image";
import cover from "../../../public/wraper.png";
async function getPERMADEATH() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b2aa111d7bmsh6ad853c654b7b59p1aad44jsn6605b7c35586",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const url = await fetch(
    ` https://free-to-play-games-database.p.rapidapi.com/api/games?category=PERMADEATH`,
    options
  );
  let response = await url.json();

  return response;
}

export default async function PERMADEATH() {
  let list = await getPERMADEATH();
  return (
    <div className="mt-5 ">
      <Image src={cover} alt="" className="w-100"></Image>
      <div className="row g-3  container mx-auto mt-4 ">
        {list.map((el) => {
          return (
            <>
              <div className="col-md-3 ">
                <Link href={`/PERMADEATH/${el.id}`}>
                  <div className="item position-relative">
                    <div className=" bg-dark text-white  ">
                      <img
                        src={el.thumbnail}
                        alt={el.title}
                        className="w-100"
                      ></img>
                      <div className="position-relative">
                        <h6 className="p-1 text-danger">{el.title}</h6>
                        <h6 className="p-1 text-center">
                          {el.short_description
                            .split(" ")
                            .slice(0, 3)
                            .join(" ")}
                        </h6>
                        <div className="d-flex justify-content-between px-1 pt-1  border-top border-1">
                          <h6 className="bg-secondary rounded-3">{el.genre}</h6>
                          <h6 className="bg-secondary rounded-3">
                            {el.platform.split("").slice(0, 10)}
                          </h6>
                        </div>
                        <div className="position-absolute top-0 end-0 text-white bg-danger px-2 rounded-bottom-3 mx-2">
                          free
                        </div>
                      </div>
                    </div>
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0  "></div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
