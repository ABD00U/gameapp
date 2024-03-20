"use client";
import React from "react";
import Image from "next/image";
import cover from "../../../public/wraper.png";
import logo from "../../../public/logo-sm.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let name = usePathname();

  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top  mt-1  ">
        <div className="container bg-dark  rounded-5 ">
          <Link className="navbar-brand text-white" href="#">
            <Image src={logo} alt="" className="w-25 h-25"></Image>
            GAME REVIEWS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className=" icon my-1"></div>
            <div className=" icon my-1"></div>
            <div className=" icon my-1"></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className={
                    name == "/home"
                      ? "nav-link  active text-danger"
                      : "nav-link text-white active"
                  }
                  aria-current="page"
                  href="/home"
                >
                  MMORPG
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={
                    name == "/SHOOTER"
                      ? "nav-link  active text-danger"
                      : "nav-link text-white active"
                  }
                  href="/SHOOTER"
                >
                  SHOOTER
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={
                    name == "/SAILING"
                      ? "nav-link  active text-danger"
                      : "nav-link text-white active"
                  }
                  href="/SAILING"
                >
                  SAILING
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={
                    name == "/PERMADEATH"
                      ? "nav-link  active text-danger"
                      : "nav-link text-white active"
                  }
                  href="/PERMADEATH"
                >
                  PERMADEATH
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={
                    name == "/SUPERHERO"
                      ? "nav-link  active text-danger"
                      : "nav-link text-white active"
                  }
                  href="/SUPERHERO"
                >
                  SUPERHERO
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={
                    name == "/PIXEL"
                      ? "nav-link  active text-danger"
                      : "nav-link text-white active"
                  }
                  href="/PIXEL"
                >
                  PIXEL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
