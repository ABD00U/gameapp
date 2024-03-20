"use client";
/* eslint-disable @next/next/no-img-element*/
/* eslint-disable jsx-a11y/alt-text*/
// @ts-nocheck
import { Linefont } from "next/font/google";
import React from "react";

async function getdetails(id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b2aa111d7bmsh6ad853c654b7b59p1aad44jsn6605b7c35586",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const url = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  let response = await url.json();
  return response;
}

export default async function gamedetails({ params }) {
  let list = await getdetails(params.gameid);

  return (
    <>
      <div>
        <div className="px-5 pt-5">
          <a>
            <img src={list?.thumbnail} className="w-100 mt-5  " />
          </a>
        </div>
        <div className="p-5">
          <h2 className="text-danger"> {list?.title}</h2>
          <h3 className="text-black"> {list?.genre}</h3>
          <p className="text-white">{list?.description}</p>
          <h2 className="text-success text-center mt-5">photo from game</h2>
          <div className="row mt-3 g-2">
            {list?.screenshots.map((el) => {
              return (
                <>
                  <div className="col-md-4">
                    <img src={el.image} key={el.id} alt="" className="w-100" />
                  </div>
                </>
              );
            })}
          </div>
          <h2 className="text-warning py-3 px-5 text-center">About game</h2>
          <div className="row g-3">
            <div className="col-md-6 ">
              <div className="border-2 border-danger">
                <h3 className="text-warning">
                  graphics:
                  <span className="text-success">
                    {list?.minimum_system_requirements?.graphics}
                  </span>
                </h3>
                <h3 className="text-warning">
                  memory:
                  <span className="text-success">
                    {list?.minimum_system_requirements?.memory}
                  </span>
                </h3>
                <h3 className="text-warning">
                  os:
                  <span className="text-success">
                    {list?.minimum_system_requirements?.os}
                  </span>
                </h3>
                <h3 className="text-warning">
                  processor:
                  <span className="text-success">
                    {list?.minimum_system_requirements?.processor}
                  </span>
                </h3>
                <h3 className="text-warning">
                  storage:
                  <span className="text-success">
                    {list?.minimum_system_requirements?.storage}
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row">
                <button className="button-86 mx-2 w-75 my-3" role="button">
                  <a
                    href={list.freetogame_profile_url}
                    className=" btn text-danger fs-2"
                    target="blank"
                  >
                    play now
                  </a>
                </button>
                <button className="button-86  mx-2 w-75 my-3" role="button">
                  <a
                    href={list.game_url}
                    className=" btn text-danger fs-2"
                    target="blank"
                  >
                    visit website
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
