import React from "react";
import next from "../../assets/icon/next.png";
import data from "../../assets/data.json";
import { Item } from "../../pages/types";
import heart from "../../assets/icon/gridicons_heart-outline.png";
import star from "../../assets/icon/star1.png";
import { Link } from "react-router-dom";

export default function Items() {
  const Items: Item[] = data.items;
  console.log("items", Items);
  return (
    <section>
      <div className="">
        <div className="flex justify-between items-center lg:pt-28 pt-8 lg:pb-16 pb-4 ">
          <p className="font-semibold lg:text-4xl text-lg">
            Latest Collections
          </p>
          <div className="lg:flex hidden gap-4">
            <button>
              <img
                className="rotate-90 bg-[#FEA301] rounded-b-full"
                src={next}
                alt=""
              />
            </button>
            <button>
              <img
                className="-rotate-90 bg-[#FEA301] rounded-b-full"
                src={next}
                alt=""
              />
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-6 w-full overflow-x-auto px-4">
            {Items.map((item) => (
              <div key={item.name} className="border rounded-2xl ">
                <div className="m-4 flex justify-center relative rounded-2xl w-[266px] h-40 lg:w-[403px] lg:h-64 bg-[#C1C1C1]">
                  <img className="lg:w-56 w-32 " src={item.img} alt="" />
                  <span className=" flex justify-between">
                    <Link className="absolute left-4 top-4" to="/">
                      <img
                        className="bg-white rounded-full w-6 lg:w-10 p-2"
                        src={heart}
                        alt=""
                      />
                    </Link>
                    <p className="bg-white rounded-full text-xs px-2 py-1 absolute top-4 right-4">
                      In Stock
                    </p>
                  </span>
                </div>
                <div className="m-4">
                  <span className="text-xs flex justify-between">
                    <p className=" border px-2 py-1 rounded-full">
                      {item.categoryName}
                    </p>
                    <span className="flex items-center gap-1">
                      <img src={star} className="w-5 h-5" alt="" />
                      <p>2K+ rating</p>
                    </span>
                  </span>
                  <p className="lg:text-2xl text-base font-bold pt-3">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500"> {item.unique}</p>
                  <span className="flex justify-between items-center pt-3">
                    <p className="lg:text-xl text-base font-bold">
                      ${item.price}
                    </p>
                    <button className=" text-white bg-[#FEA301] p-3  rounded-lg">
                      Add to Cart
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 justify-between pt-28 w-full overflow-x-auto">
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10 ">
              Men
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10  bg-[#FEA301] text-white">
              Women
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10">
              Kids
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10">
              Perfumes
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10">
              Sport
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10  ">
              Jewelry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
