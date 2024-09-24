import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#f1f5f9]">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
