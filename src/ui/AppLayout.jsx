import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className=" bg-stone-100 ">
      <Header />
      <main className=" absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[99vw] ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
