import { useParams } from "react-router-dom";
import star from "../assets/icon/star1.png";
// import cart from "../assets/icon/cart.png";
import data from "../assets/data.json";
import { Item } from "../types";


interface Params {
  productId: string;
  [key: string]: string | undefined;
}

const CartPage = () => {
  const { id } = useParams<Params>();
  const Items: Item[] = data.items;

  const item = Items.find(
    (e) => e.id === parseInt(id || "")
  );
  return (
    <div className="min-h-screen  max-w-[1584px] mx-auto p-6 lg:p-20">
      {/* Cart Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Details Section */}
        <div className="lg:col-span-2 bg-white border shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={item?.img}
                alt="Product"
                className="rounded-lg w-full md:w-64 bg-[#F2F2F2]"
              />
              <div className="flex space-x-2 mt-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <img
                    key={index}
                    src="https://via.placeholder.com/50"
                    alt="Thumbnail"
                    className="w-12 h-12 rounded-lg"
                  />
                ))}
              </div>
            </div>
            {/* Product Info */}
            <div className="flex-grow md:ml-6">
              <h1 className="text-xl font-semibold">{item?.name}</h1>
              <p className="text-sm text-gray-500">Brand: {item?.unique}</p>
              <div className="mt-2">
                <p className="text-lg font-bold text-gray-800">
                  ${item?.price}
                </p>
                <p className="text-sm line-through text-gray-400">$300</p>
                <p className="text-green-600 text-sm font-medium">-50%</p>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                80 units left + Shipping fee may vary on location
              </p>
              <p className="mt-1 text-sm flex gap-1 text-yellow-500">
                1k+ rating <img src={star} alt="" />
              </p>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center space-x-4">
                <p className="text-sm">Quantity:</p>
                <div className="flex items-center border rounded-lg ">
                  <button className="bg-[#FEA301] rounded-l-lg px-2 py-1 text-lg text-white">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="bg-[#FEA301] rounded-r-lg px-2 py-1 text-lg text-white">
                    +
                  </button>
                </div>
              </div>

              {/* Color and Size */}
              <div className="mt-4 flex items-center space-x-4 ">
                <p className="text-sm">Size:</p>
                <div className="flex space-x-2 mt-2">
                  {[20, 25, 32, 37].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-[12px] ml-2 hover:underline cursor-pointer">
                  See all size guides
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <p className="text-sm">Color:</p>
                <div className="flex space-x-2 mt-2">
                  {[
                    "bg-[#EBCDD5]",
                    "bg-[#4444FF]",
                    "bg-[#FF4646]",
                    "bg-[#242425]",
                  ].map((color, i) => (
                    <div className="border border-gray-400 rounded-lg flex p-1">
                      <button
                        key={i}
                        className={`w-8 h-8 rounded-lg  ${color}`}
                      ></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex space-x-4">
                <button className="flex-1 border-2 border-gray-500 text-white font-semibold py-2 rounded-lg w-[226px] h-[68px]">
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#FEA301] text-white font-semibold py-2 rounded-lg w-[226px] h-[68px]">
                  Buy Now
                </button>
              </div>

              <p className="mt-4 text-green-600 text-sm">
                Pickup & Pay on collection available
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold">Delivery & Returns</h2>
          <div className="mt-4">
            <p className="text-sm font-medium">Location</p>
            <select className="mt-2 w-full border rounded-lg px-4 py-2">
              <option>Choose Location</option>
            </select>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Delivery</p>
            <ul className="list-disc pl-4 mt-2 text-sm text-gray-500">
              <li>Estimated delivery time is 1–3 business days.</li>
              <li>For same-day delivery: Place your order before 12pm.</li>
              <li>
                Next-day delivery orders placed after 12pm will arrive the next
                day.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Return Policy</p>
            <p className="text-sm text-gray-500">
              Guaranteed 7-day return policy.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8 bg-white shadow-md rounded-lg">
        <div className="flex border-b">
          {["Overview", "Description", "Warranty", "Reviews"].map((tab, i) => (
            <button
              key={i}
              className={`flex-1 py-4 text-center text-sm font-medium ${
                i === 0
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600">
            Available in a wide range of colors, patterns, and themes to appeal
            to kids.
          </p>
        </div>
      </div>

      {/* Similar Items */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Similar Items You May Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Item"
                className="w-full rounded-lg"
              />
              <h3 className="mt-2 font-semibold text-sm">Item Name</h3>
              <p className="text-gray-500 text-sm">$120</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
