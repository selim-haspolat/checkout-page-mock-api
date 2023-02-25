import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditProduct = () => {
  const [editId, setEditId] = useState("");
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: 0,
    productImage: "",
    productDescription: "",
    productTag: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios(
        "https://63f2206c4f17278c9a20b961.mockapi.io/items/" + editId
      );
      setProductData(data);
      e.target.reset();
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
        icon: "error",
        title: `#${editId} Ürün bulunamadi`,
      });
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "https://63f2206c4f17278c9a20b961.mockapi.io/items/" + editId,
        productData
      );
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
        title: "Güncelleme Başarili",
      });
    } catch (error) {
      await axios.put(
        "https://63f2206c4f17278c9a20b961.mockapi.io/items/" + editId,
        productData
      );
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
        icon: "error",
        title: "Güncelleme Başarisiz",
      });
    }
  };

  return (
    <div className="dark">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product #Id" />
          </div>
          <TextInput
            onChange={(e) => setEditId(e.target.value)}
            id="small"
            type="number"
            sizing="sm"
            maxLength="20"
            placeholder="id"
            required
          />
        </div>
        <button
          type="submit"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900 block mx-auto mt-5"
        >
          Find
        </button>
      </form>
      <form onSubmit={postData} className="dark">
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Title" />
          </div>
          <TextInput
            onChange={(e) =>
              setProductData({ ...productData, productName: e.target.value })
            }
            value={productData.productName}
            id="small"
            type="text"
            sizing="sm"
            maxLength="15"
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
            value={productData.productPrice}
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
            value={productData.productImage}
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
            value={productData.productDescription}
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
            maxLength="400"
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
            className="text-green-900 w-36 hover:text-white border border-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 dark mt-7"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
