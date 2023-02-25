import { useState } from "react";
import ModalInfo from "./ModalInfo";

const CardItem = ({
  data: {
    productName,
    productPrice,
    productTag,
    productImage,
    productDescription,
    id,
  },
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full dark mx-auto">
      <div className="w-full h-[385px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-64 object-cover object-center"
          src={productImage}
          alt={productName}
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white my-3">
            {productName}
          </h5>

          <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-gray-900 dark:text-white">
              ${productPrice}
            </span>
            <button
              href="#"
              onClick={() => setShow(!show)}
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              Incele
            </button>
          </div>
        </div>
      </div>
      <ModalInfo
        productName={productName}
        productPrice={productPrice}
        productTag={productTag}
        productImage={productImage}
        productDescription={productDescription}
        id={id}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default CardItem;
