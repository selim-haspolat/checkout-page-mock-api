import { Modal } from "flowbite-react";
import React from "react";

const ModalInfo = ({
  productName,
  productPrice,
  productTag,
  productImage,
  productDescription,
  id,
  show,
  setShow,
}) => {

  return (
    <div>
      <React.Fragment>
        <Modal dismissible={true} show={show} onClick={() => setShow(!show)}>
          <Modal.Header className="dark bg-slate-800">{productName} #{id}</Modal.Header>
          <Modal.Body className="bg-slate-800">
            <div className="space-y-6 dark">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {productDescription}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-slate-800 text-white flex justify-between"><p>${productPrice}</p><p className="bg-gray-300 px-2 font-bold text-sm py-1 rounded-md text-slate-800">{productTag}</p></Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default ModalInfo;
