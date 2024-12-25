import { Outlet } from "react-router-dom";

const ShoppingLayout = () => {
  return (
    <>
      <div>
        <h1>Shopping Layout</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default ShoppingLayout;
