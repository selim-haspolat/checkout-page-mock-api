import { useState } from "react";
import { Label, Textarea, TextInput } from "flowbite-react";
import axios from 'axios'
import Swal from "sweetalert2";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: 0,
    productImage: "",
    productDescription: "",
    productTag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    postProduct()

    e.target.reset();
    setProductData({
      productName: "",
      productPrice: 0,
      productImage: "",
      productDescription: "",
      productTag: "",
    });
  };

  const postProduct = async() => {
    try {
      await axios.post('https://63f2206c4f17278c9a20b961.mockapi.io/items', productData)
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Ürün Eklendi`,
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Ürün Eklenemedi`,
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="dark">
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Title" />
          </div>
          <TextInput
            onChange={(e) =>
              setProductData({ ...productData, productName: e.target.value })
            }
            id="small"
            type="text"
            sizing="sm"
            maxLength="20"
            required
          />
        </div>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Price" />
          </div>
          <TextInput
            onChange={(e) =>
              setProductData({ ...productData, productPrice: e.target.value })
            }
            id="small"
            type="number"
            sizing="sm"
            required
          />
        </div>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Image" />
          </div>
          <TextInput
            onChange={(e) =>
              setProductData({ ...productData, productImage: e.target.value })
            }
            id="small"
            type="url"
            sizing="sm"
            required
          />
        </div>
        <div id="textarea" className="dark mb-3">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Product Description" />
          </div>
          <Textarea
            onChange={(e) =>
              setProductData({
                ...productData,
                productDescription: e.target.value,
              })
            }
            id="comment"
            placeholder="Description..."
            required={true}
            rows={4}
            maxLength="450"
          />
        </div>
        <div className="grid grid-cols-3 gap-1 dark">
          <div
            onChange={(e) =>
              setProductData({ ...productData, productTag: e.target.id })
            }
            className="flex items-center mr-4"
          >
            <input
              id="Elektronik"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Elektronik"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Elektronik
            </label>
          </div>
          <div
            onChange={(e) =>
              setProductData({ ...productData, productTag: e.target.id })
            }
            className="flex items-center mr-4"
          >
            <input
              id="Giyim"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Giyim"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Giyim
            </label>
          </div>
          <div
            onChange={(e) =>
              setProductData({ ...productData, productTag: e.target.id })
            }
            className="flex items-center mr-4"
          >
            <input
              id="Otomotiv"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Otomotiv"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Otomotiv
            </label>
          </div>
          <div
            onChange={(e) =>
              setProductData({ ...productData, productTag: e.target.id })
            }
            className="flex items-center mr-4"
          >
            <input
              id="Spor"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Spor"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Spor
            </label>
          </div>
          <div
            onChange={(e) =>
              setProductData({ ...productData, productTag: e.target.id })
            }
            className="flex items-center mr-4"
          >
            <input
              id="Mobilya"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Mobilya"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mobilya
            </label>
          </div>
        </div>
        <div className="text-center m-4">
          <button
            type="submit"
            className="text-gray-900 w-36 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark mt-7"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
