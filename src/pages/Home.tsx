import React from "react";
import Banner from "../components/HomePage/Banner";
import Product from "../components/HomePage/Item";

export default function Home() {
  return (
    <div
    // className="max-w-screen-xl mx-[1344px]"
    >
      <div>
        <Banner />
        <div className=" max-w-[1584px] mx-auto p-6 lg:p-20">
          <div className="">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
