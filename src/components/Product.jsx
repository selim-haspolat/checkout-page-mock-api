import { Tabs } from "flowbite-react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import RemoveProduct from "./RemoveProduct";

const Product = () => {
  return (
    <div>
      <Tabs.Group aria-label="Tabs with underline" style={"underline"}>
        <Tabs.Item active={true} title="Add Product">
          <AddProduct />
        </Tabs.Item>
        <Tabs.Item title="Edit Product">
          <EditProduct/>
        </Tabs.Item>
        <Tabs.Item title="Remove Product"><RemoveProduct /></Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Product;
