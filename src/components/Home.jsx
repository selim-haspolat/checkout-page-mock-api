import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import axios from "axios";

const Home = () => {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const getData = async (search) => {
      const res = await axios(
        "https://63f2206c4f17278c9a20b961.mockapi.io/items"
      );
      const data = res.data;
      const filterData = data.filter((i) => (i.productName.toLowerCase().includes(search.toLowerCase()) && i.productTag.includes(active)));
      setData(filterData);
    };
    getData(item);
  }, [item,active]);

  return (
    <div className="px-10 py-5">
      <input
        onChange={(e) => setItem(e.target.value)}
        type="search"
        className="border rounded-lg w-96 border-slate-400 outline-none py-1 block mx-auto text-slate-800"
        placeholder="Search Item"
      />

      <div className="grid grid-cols-3 md:grid-cols-6 max-w-[1000px] mx-auto gap-3 my-5 pb-5 border-b">
        <button
          onClick={(e) => setActive('')}
          className={`hover:bg-gray-700 transition  px-2 py-1 rounded-lg ${
            active === "" && "!bg-gray-300 text-slate-900"
          }`}
        >
          Hepsi
        </button>
        <button
          onClick={(e) => setActive(e.target.innerText)}
          onDoubleClick={() => setActive('')}
          className={`hover:bg-gray-700 transition  px-2 py-1 rounded-lg ${
            active === "Elektronik" && "!bg-gray-300 text-slate-900"
          }`}
        >
          Elektronik
        </button>
        <button
          onClick={(e) => setActive(e.target.innerText)}
          className={`hover:bg-gray-700 transition  px-2 py-1 rounded-lg ${
            active === "Giyim" && "!bg-gray-300 text-slate-900"
          }`}
        >
          Giyim
        </button>
        <button
          onClick={(e) => setActive(e.target.innerText)}
          className={`hover:bg-gray-700 transition  px-2 py-1 rounded-lg ${
            active === "Otomotiv" && "!bg-gray-300 text-slate-900"
          }`}
        >
          Otomotiv
        </button>
        <button
          onClick={(e) => setActive(e.target.innerText)}
          className={`hover:bg-gray-700 transition  px-2 py-1 rounded-lg ${
            active === "Spor" && "!bg-gray-300 text-slate-900"
          }`}
        >
          Spor
        </button>
        <button
          onClick={(e) => setActive(e.target.innerText)}
          className={`hover:bg-gray-700 transition  px-2 py-1 rounded-lg ${
            active === "Mobilya" && "!bg-gray-300 text-slate-900"
          }`}
        >
          Mobilya
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
        {data.map((x) => (
          <CardItem key={x.id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default Home;
