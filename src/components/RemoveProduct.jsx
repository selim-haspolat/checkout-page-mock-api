import { Label, TextInput, Modal, Button } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RemoveProduct = () => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleDelete = async () => {
    setDeleteId("");
    try {
      await axios.delete(
        `https://63f2206c4f17278c9a20b961.mockapi.io/items/${deleteId}`
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
        title: `#${deleteId} Ürün silindi`,
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
        icon: "error",
        title: `#${deleteId} Bulunamadi`,
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
            onChange={(e) => setDeleteId(e.target.value)}
            value={deleteId}
            id="small"
            type="number"
            sizing="sm"
            maxLength="15"
            placeholder="id"
            required
          />
        </div>
        <button
          type="submit"
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 block mx-auto mt-5"
        >
          Delete
        </button>
      </form>
      <React.Fragment>
        <Modal show={show} onClick={() => setShow(!show)}>
          <Modal.Header className="dark bg-slate-800">
            Delete Product #{deleteId}
          </Modal.Header>
          <Modal.Footer className="dark bg-slate-800">
            <button
              onClick={handleDelete}
              className="border border-red-600 text-red-600 font-medium hover:bg-red-600 hover:text-slate-800 py-1 px-3 rounded-lg ml-auto"
            >
              Delete
            </button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default RemoveProduct;
